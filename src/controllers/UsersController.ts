import { Route, Tags } from "tsoa";
import { IUserController } from "./interfaces";

// ORM - Users
import { getAllUsers, getUserById } from "../domain/orm/user.orm";


@Route("/api/users")
@Tags("UserController")
export class UserController implements IUserController {
  /**
   * Endpoint to retreive the Users list in DB
   */
  public async getUsers(): Promise<any> {
    return await getAllUsers()
  }
  public async getUserById(id:string): Promise<any> {
    return await getUserById(id);
  }
  
}

