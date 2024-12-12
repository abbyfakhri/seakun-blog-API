import express from "express";
import BlogPostsController from "../controllers/BlogPostsController";
import PostValidation from "../middleware/PostValidation";

const router = express.Router();

router.get("/posts", BlogPostsController.GetPosts);
router.get("/posts/:id", BlogPostsController.GetPostByID);
router.post("/posts", PostValidation.ValidateCreatePost, BlogPostsController.CreatePost);
router.put("/posts/:id", PostValidation.ValidateUpdatePost, BlogPostsController.EditPost);
router.delete("/posts/:id", BlogPostsController.DeletePost);

export default router;