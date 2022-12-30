import { BasicResponse } from "../types";
import { User } from "src/domain/types";

export interface IBasicController {
  getMessage(name?: string): Promise<BasicResponse>
}

export interface IUserController {
  getUsers(): Promise<any>
  getUserById(id: string): Promise<any>
  deleteUser(id: string): Promise<any>
  updateUser(id: string, user: User): Promise<any>
  createUser(user: User): Promise<any>
}

export interface IKatasController {
  getKatas(): Promise<any>
  getKataById(id: string): Promise<any>
  deleteKata(id: string): Promise<any>
  updateKata(id: string, kata: any): Promise<any>
  createKata(kata: any): Promise<any>
}