import { RequestHandler, Request, Response } from "express";
import Post from "../db/models/Posts";
import Helper from "../helpers/Helper";

const GetPosts: RequestHandler = async (req: Request, res: Response) => {
    try {
        const posts = await Post.findAll();
        if (!posts) {
            res.status(404);
            res.send(Helper.ResponseData(404, "Not Found", "Posts Not Found", null));
            return;
        }
        res.status(200);
        res.send(Helper.ResponseData(200, "SUCCESS", null, posts));
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
            content: content
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
        const { title, content } = req.body;
        const post = await Post.findByPk(id);

        if (!post) {
            res.status(404);
            res.send(Helper.ResponseData(404, "Not Found", "Post not Found", null));
            return;
        }

        post.title = title ?? post.title;
        post.content = content ?? post.content;
        
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