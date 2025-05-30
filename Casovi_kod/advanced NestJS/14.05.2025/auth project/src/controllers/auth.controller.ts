import { RequestHandler } from "express";
import { User, UserCredentials } from "../interfaces/user.interface";
import { AuthService } from "../services/auth.service";

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
      res.json(user);
    } catch (error) {
      res.status(401).json({msg: "couldn't login user", error: (error as Error).message})
    }
  }
}
