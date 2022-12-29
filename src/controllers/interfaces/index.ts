import { BasicResponse } from "../types";

export interface IBasicController {
  getMessage(name?: string): Promise<BasicResponse>
}

export interface IUserController {
  getUsers(): Promise<any>
}