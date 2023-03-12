import express from "express";

import { getFeedPost, getUserPosts, likePost } from "../controllers/posts.js";

import { verifyToken } from "../middleware/auth.js";

const routes = express.Router();

routes.get("/", verifyToken, getFeedPost);
routes.get("/:id", verifyToken, getUserPosts);

routes.patch("/:id/like", verifyToken, likePost);


export default routes;