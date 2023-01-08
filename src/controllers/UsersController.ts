import { Route, Tags, Query, Get, Delete } from "tsoa";
import { IUserController } from "./interfaces";

// ORM - Users
import {
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser
} from "../domain/orm/user.orm";
import { User } from "src/domain/types";


@Route("/api/users")
@Tags("UserController")
export class UserController implements IUserController {
  /**
   * Endpoint to retreive the Users list in DB
   */
  @Get('/')
  public async getUsers(): Promise<any> {
    return await getAllUsers()
  }
  @Get('/{:id}')
  public async getUserById(@Query()id:string | any): Promise<any> {
    return await getUserById(id);
  }
  @Delete('/')
  public async deleteUser(@Query()id: string | any): Promise<any> {
    return await deleteUser(id);
  }
  // @Put('/')
  public async updateUser(id: string, user: User): Promise<any> {
    return await updateUser(id, user);
  }
}

