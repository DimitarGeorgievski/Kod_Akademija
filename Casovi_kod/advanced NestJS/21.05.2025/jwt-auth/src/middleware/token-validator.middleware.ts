import { RequestHandler } from "express";
import { verifyAccessToken } from "../const/jwt.const";
import { AuthService } from "../services/auth.service";

export const tokenValidator: RequestHandler = async (req,res,next) => {
    try {
        const authorizationHeader = req.headers.authorization;
        if(!authorizationHeader) throw new Error()
        console.log(authorizationHeader);
        const token = authorizationHeader.split(" ")[1];
        const {userId} = verifyAccessToken(token);
        await AuthService.getUserById(userId);
        next();
    } catch (error) {
        console.log(error);
        res.sendStatus(403);
    }
}