import UserService from "../services/user.service.js";

export default class UserController{
    constructor(){
        this.userService = new UserService();
    }
    async register(req,res){
        try {
            const credential = req.body;
            const user = await this.userService.register(credential);
            res.status(201).json({
                message: "User registered successfully"
            })
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }
    async login(req,res){
        try {
            const credential = req.body;
            const user = await this.userService.login(credential);
            res.status(200).json({message: "User logged in successfully"});
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }
}