import mongoose from "mongoose";
import IUser from "../interfaces/IUser";

export const userEntity = () => {
  let userSchema = new mongoose.Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    password: { type: String, required: true }
  },{
    versionKey: false
  });
  return mongoose.models.users || mongoose.model('users', userSchema);
}