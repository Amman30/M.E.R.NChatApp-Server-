
import express from "express";
import {
    getUser,
    getUserFriend,
    addRemoveFriend,
} from "../controllers/users.js"

import { verifyToken } from "../middleware/auth.js";

const routes = express.Router();

routes.get("/:id", verifyToken, getUser);
routes.get("/:id/friends", verifyToken, getUserFriend);


routes.patch("/:id/friendsID", verifyToken, addRemoveFriend)


export default routes;