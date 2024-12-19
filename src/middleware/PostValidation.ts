import Validator from "validatorjs";
import { Request, Response, NextFunction } from "express";
import Helper from "../helpers/Helper";

const ValidateCreatePost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { title, content } = req.body;

        const data = {
            title,
            content
        };

        const rules: Validator.Rules = {
            "title": "required|string",
            "content": "required|string"
        };

        const validate = new Validator(data, rules);

        if (validate.fails()) {
            res.status(400);
            res.send(Helper.ResponseData(400, "Bad Request", validate.errors.errors, null));
            return;
        }

        next()
    } catch (error: any) {
        res.status(500);
        res.send(Helper.ResponseData(500, "Server Error", error, null));
        console.log(error.message);
        return;
    }
};

const ValidateUpdatePost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { title, content, isActive } = req.body;
    
        const data = {
            title,
            content,
            isActive
        };
    
        const rules: Validator.Rules = {
            title: "string|required_without:content",
            content: "string|required_without:title",
            isActive: "boolean|required"
        };
    
        const validate = new Validator(data, rules);
    
        if (validate.fails()) {
            res.status(400);
            res.send(Helper.ResponseData(400, "Bad Request", validate.errors.errors, null));
            return;
        }
    
        next()
    } catch (error: any) {
        res.status(500);
        res.send(Helper.ResponseData(500, "Server Error", error, null));
        console.log(error.message);
        return;
    }
};

export default { ValidateCreatePost, ValidateUpdatePost };