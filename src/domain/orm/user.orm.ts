import { logError } from "../../utils/logger";
import { userEntity } from "../entities/user.entity";

let userModel = userEntity();
/**
 * Method to obtain all user in colleption Users in mongoDB
*/
export const getAllUsers = async (): Promise<any[] | undefined> => {
  try {
    return await userModel.find({ isDelete: false });
  } catch (error) {
    logError('Error in Get ORM ' + error);
  }
}

export const getUserById = async (id:string): Promise<any[] | null | undefined> => {
  try {
    return await userModel.findById(id);
  } catch (error) {
    logError('Error in Get ORM ' + error);
  }
}