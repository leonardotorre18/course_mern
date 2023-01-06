import IAuth from "../interfaces/IAuth";
import { userEntity } from "../entities/user.entity";
import bcript from "bcrypt";
import doctenv from "dotenv";
import jwt from "jsonwebtoken";
import IUser from "../interfaces/IUser";

let userModel = userEntity();

doctenv.config();

export const loginUser = async (auth: IAuth) => {
  const user = await userModel.findOne({ email: auth.email })

  if (!user) return {error: 'User not found'}

  let token = await jwt.sign({email: user.email}, 'SECRET', {
    expiresIn: '20min'
  })
  return {token}
}

export const register = async (user: IUser) => {
  return await userModel.insertMany([user]);
}