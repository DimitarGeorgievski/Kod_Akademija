import { Router } from "express";
import { productsRouter } from "../routes/products.routes";
import { authRouter } from "../routes/auth.routes";
import { sessionValidator } from "../middleware/session-validator.middleware";


export const globalRouter = Router();

globalRouter.use("/auth", authRouter);
globalRouter.use("/products",sessionValidator, productsRouter);