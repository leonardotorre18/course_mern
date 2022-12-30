import { logError } from "../../utils/logger";
import { userEntity } from "../entities/user.entity";
import { User } from "../types";

let userModel = userEntity();
/**
 * Method to obtain all user in colleption Users in mongoDB
*/
export const getAllUsers = async (): Promise<any[] | undefined> => {
  try {
    return await userModel.find({ isDelete: false });
  } catch (error) {
    logError('Error in GetAllUsers ORM ' + error);
  }
}

export const getUserById = async (id:string): Promise<any[] | null | undefined> => {
  try {
    return await userModel.findById(id);
  } catch (error) {
    logError('Error in GetUserById ORM ' + error);
  }
}

export const deleteUser = async (id: string) => {
  try {
    return await userModel.deleteOne({ _id: id })
  } catch (error) {
    logError('Error in DeleteUser ORM ' + error);
  }
}

export const updateUser = async (id: string, user: User) => {
  try {
    return await userModel.updateOne({_id: id}, { $set: user});
  } catch (error) {
    logError('Error in UpdateUser ORM ' + error);
  }
}

export const createUser = async (user: User) => {
  try {
    return await userModel.insertMany([user])
  } catch (error) {
    logError('Error in CreateUser ORM ' + error);
  }
}