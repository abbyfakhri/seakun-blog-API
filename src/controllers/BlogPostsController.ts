import { RequestHandler, Request, Response } from "express";
import Post from "../db/models/Posts";
import Helper from "../helpers/Helper";

const GetPosts: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { page, limit } = req.query;

        if (!page || !limit) {
            const posts = await Post.findAll({
                attributes: ['title', 'content']
            });

            if (!posts.length) {
                res.status(404);
                res.send(Helper.ResponseData(404, "Not Found", "Posts Not Found", null));
                return;
            }

            res.status(200);
            res.send(Helper.ResponseData(200, "SUCCESS", null, posts));
            return;
        }

        const offset = (Number(page) - 1) * Number(limit);

        const posts = await Post.findAndCountAll({
            attributes: ['title', 'content'],
            limit: Number(limit),
            offset: offset
        });

        if (!posts.rows.length) {
            res.status(404);
            res.send(Helper.ResponseData(404, "Not Found", "Posts Not Found", null));
        }

        const totalPages = Math.ceil(posts.count / Number(limit));

        const response = {
            currentPage: Number(page),
            totalPages: totalPages,
            totalItems: posts.count,
            itemsPerPage: Number(limit),
            data: posts.rows
        };

        res.status(200);
        res.send(Helper.ResponseData(200, "SUCCESS", null, response));
        return;
    } catch (error: any) {
        res.status(500);
        res.send(Helper.ResponseData(500, "Server Error", error.message, null));
        return;
    }
};

const GetPostByID: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const post = await Post.findByPk(id);

        if (!post) {
            res.status(404);
            res.send(Helper.ResponseData(404, "Not Found", "Post Not Found", null));
            return;
        }

        res.status(200);
        res.send(Helper.ResponseData(200, "SUCCESS", null, post));
        return;
    } catch (error: any) {
        res.status(500);
        res.send(Helper.ResponseData(500, "Server Error", error.message, null));
        return;
    }
};

const CreatePost: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { title, content } = req.body;
        const post = await Post.create({
            title: title,
            content: content,
            isActive: false
        });

        res.status(201);
        res.send(Helper.ResponseData(201, "Post Created", null, post));
        return;
    } catch (error: any) {
        res.status(500);
        res.send(Helper.ResponseData(500, "Server Error", error.message, null));
        return;
    }
};

const EditPost: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { title, content, isActive } = req.body;
        const post = await Post.findByPk(id);

        if (!post) {
            res.status(404);
            res.send(Helper.ResponseData(404, "Not Found", "Post not Found", null));
            return;
        }

        post.title = title ?? post.title;
        post.content = content ?? post.content;
        post.isActive = isActive;
        
        await post.save();

        res.status(200);
        res.send(Helper.ResponseData(200, `Post with id: ${id} updated`, null, post));
        return;

    } catch (error: any) {
        res.status(500);
        res.send(Helper.ResponseData(500, "Server Error", error.message, null));
        return;
    }
};

const DeletePost: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const post = await Post.findByPk(id);
        if (!post) {
            res.status(404);
            res.send(Helper.ResponseData(404, "Not Found", "ID not Found", null));
            return;
        }

        await post.destroy();

        res.status(200);
        res.send(Helper.ResponseData(200, `Post with id: ${id} deleted`, null, null));
        return;
    } catch (error: any) {
        res.status(500);
        res.send(Helper.ResponseData(500, "Server Error", error.message, null));
        return;
    }
};

export default { GetPosts, GetPostByID, CreatePost, EditPost, DeletePost };