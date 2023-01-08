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

export const getUserById = async (id:string): Promise<any> => {
  try {
    return await userModel.findById(id); 
  } catch (error: any) {
    logError('Error in GetUserById ORM ' + error);
    return { error: error.message }
  }
}

export const getPaginationUser = async (limit: number, pag: number): Promise<any> => {
  try {
    return await userModel.find({
      isDeleted: false
    }, 'name email')
    .limit(limit)
    .skip((pag - 1) * limit)
  } catch (error: any) {
    logError('Error in GetPaginationUser ORM ' + error);
    return { error: error.message }
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
