import { RequestHandler } from "express";
import { User, UserCredentials } from "../interfaces/user.interface";
import { AuthService } from "../services/auth.service";
import { createAccessToken, createRefreshToken, verifyRefreshToken } from "../const/jwt.const";
import "dotenv/config";

export class AuthController {
  static registerUser: RequestHandler = async (req, res) => {
    try {
        const userData: User = req.body;
        const registeredUser = await AuthService.registerUser(userData);
        res.json(registeredUser).status(201);
    } catch (error) {
      res
        .send({ msg: "Couldn't register user", error: (error as Error).message })
        .status(401);
    }
  };
  static loginUser: RequestHandler = async (req, res) => {
    try {
      const cred: UserCredentials = req.body;
      const user = await AuthService.loginUser(cred);
      const accessToken = createAccessToken(user.id);
      const refreshToken = createRefreshToken(user.id);
      res.set("access-control-expose-headers", "access-token, refresh-token"); // za da se izvadat hederite na front end bez ova nema da raboti
      res.set("access-token", accessToken);
      res.set("refresh-token", refreshToken);
      await AuthService.saveRefreshToken(user.id, refreshToken);
      res.json(user);
    } catch (error) {
      res.status(401).json({msg: "couldn't login user", error: (error as Error).message})
    }
  }
  static refreshAccessTOken: RequestHandler = async(req,res) => {
    try {
      const refreshToken = req.headers["refresh-token"] as string;
      if(!refreshToken) throw new Error();
      const { userId} = verifyRefreshToken(refreshToken);
      const foundUser = await AuthService.getUserById(userId);
      const refreshTokenExists = foundUser.RefreshToken.some(token => token === refreshToken);
      if(!refreshTokenExists) throw new Error();
      const accessToken = createAccessToken(foundUser.id);
      res.set("access-token", accessToken);
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.sendStatus(403);
    }
  }
  static logoutUser: RequestHandler = async (req, res) => {
    try {
      const refreshToken = req.headers["refresh-token"] as string;
      const { userId} = verifyRefreshToken(refreshToken);
      await AuthService.deleteRefreshToken(userId,refreshToken);
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(400).json({msg: (error as Error).message})
    }
    res.sendStatus(200);
  }
}
