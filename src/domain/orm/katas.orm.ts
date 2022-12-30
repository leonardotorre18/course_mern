import { logError } from "../../utils/logger";
import { userEntity } from "../entities/user.entity";

let userModel = userEntity();
/**
 * Method to obtain all user in colleption Users in mongoDB
*/
export const getAllKatas = async (): Promise<any[] | undefined> => {
  try {
    return await userModel.find({ isDelete: false });
  } catch (error) {
    logError('Error in GetAllKatas ORM ' + error);
  }
}

export const getKataById = async (id:string): Promise<any[] | null | undefined> => {
  try {
    return await userModel.findById(id);
  } catch (error) {
    logError('Error in GetKataById ORM ' + error);
  }
}

export const deleteKata = async (id: string) => {
  try {
    return await userModel.deleteOne({ _id: id })
  } catch (error) {
    logError('Error in DeleteKata ORM ' + error);
  }
}

export const updateKata = async (id: string, kata: any) => {
  try {
    return await userModel.updateOne({_id: id}, { $set: kata});
  } catch (error) {
    logError('Error in UpdateKata ORM ' + error);
  }
}

export const createKata = async (kata: any) => {
  try {
    return await userModel.insertMany([kata])
  } catch (error) {
    logError('Error in CreateKata ORM ' + error);
  }
}