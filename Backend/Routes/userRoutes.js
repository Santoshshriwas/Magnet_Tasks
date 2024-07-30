import express from "express";
import multer from "../middleware/multer.js";
import {registerUser} from "../Controllers/userControllers.js"

const userRouter = express.Router();
userRouter.post("/register",registerUser,multer.single('image'));

export default userRouter;