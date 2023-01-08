import IAuth from "../interfaces/IAuth";
import { userEntity } from "../entities/user.entity";
import doctenv from "dotenv";
import bcript from 'bcrypt';
import jwt from "jsonwebtoken";
import IUser from "../interfaces/IUser";
import { logInfo, logSuccess } from "../../utils/logger";

let userModel = userEntity();

doctenv.config();
const secret = process.env.SECRET_KEY || 'SECRET_KEY';

export const loginUser = async (auth: IAuth) => {
  const user = await userModel.findOne({ email: auth.email })

  if (!user) return { error: 'User not found' }

  /*
    comparing bd password with get user password
  */
  const validation = await bcript.compareSync(auth.password, user.password)
  if(!validation) return { error: 'Password invalid' }

  let token = await jwt.sign({email: user.email}, secret, {
    expiresIn: '20min'
  })
  logInfo(`Login user "${user.name} - ${user.email}" get token: ${token}`);
  return {token}
}

export const register = async (user: IUser) => {
  logSuccess(`User "${user.name}" is Register!`)
  return await userModel.insertMany([user]);
}