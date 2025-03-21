import { Schema, model } from "mongoose";
import { userRoles } from "../util/constants.js";

const userSchema = new Schema({
  email: {
    type: String,
    minLength: 5,
    maxLength: 50,
    required: [true, "Email is required"],
    // unique: true,
  },
  password: {
    type: String,
    minLength: 5,
    required: [true, "Password is required"],
  },
  role: {
    type: [String],
    enum: userRoles,
    required: [true, "Role is required"],
  },
});

const User = model("user", userSchema, "users");
export default User;