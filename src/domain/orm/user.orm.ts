import { logError } from "../../utils/logger";
import { userEntity } from "../entities/user.entity";

/**
 * Method to obtain all user in colleption Users in mongoDB
 */
export const getAllUsers = async (): Promise<any[] | undefined> => {
  try {
    let userModel = userEntity();
    return await userModel.find({ isDelete: false });
  } catch (error) {
    logError('Error in Get ORM ' + error);
  }
}