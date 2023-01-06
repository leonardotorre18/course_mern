import { loginUser, register } from "../domain/orm/auth.orm";
import IAuth from "../domain/interfaces/IAuth";
import IUser from "../domain/interfaces/IUser";
import { IAuthController } from "./interfaces";

export class AuthController implements IAuthController {
  logout(): Promise<any> {
    throw new Error("Method not implemented.");
  }
  public async login(auth: IAuth): Promise<any> {
    return await loginUser(auth);
  }
  public async register(user: IUser): Promise<any> {
    return await register(user);
  }
  
}