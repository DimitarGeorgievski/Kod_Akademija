import bcrypt from "bcrypt";
import User from "../schemas/user.schema.js";

export default class UserService {
  async register({ email, password, role }) {
    // check if user exist
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("User with this email already exists.");
    }
    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // create and return user
    return User.create({
      email,
      password: hashedPassword,
      role,
    });
  }
  async login({ email, password }) {
    // Find user by email
    const existingUser = await User.findOne({ email });
    if(!existingUser){
        throw new Error("Invalid email or password");
    }
    // compare the incomming password and the storred password
    const isMatch = await bcrypt.compare(password, existingUser.password)
    if(!isMatch){
        throw new Error("Invalid email or password.");
    }
    return existingUser;
  }
}
