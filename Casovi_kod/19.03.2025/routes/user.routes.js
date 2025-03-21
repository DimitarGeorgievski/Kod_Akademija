import UserController from "../controllers/user.controller.js";
import {Router} from "express";

const userRouter = Router();
const userController = new UserController();

userRouter.post("/register", (req,res) => userController.register(req,res));
userRouter.post("/login", (req,res) => userController.login(req,res));

export default userRouter;