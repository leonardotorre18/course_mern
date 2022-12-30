import { logError } from "../../utils/logger";
import { katasEntity } from "../entities/katas.entity";

let katasModel = katasEntity();
/**
 * Method to obtain all user in colleption Users in mongoDB
*/
export const getAllKatas = async (): Promise<any[] | undefined> => {
  try {
    return await katasModel.find({ isDelete: false });
  } catch (error) {
    logError('Error in GetAllKatas ORM ' + error);
  }
}

export const getKataById = async (id:string): Promise<any[] | null | undefined> => {
  try {
    return await katasModel.findById(id);
  } catch (error) {
    logError('Error in GetKataById ORM ' + error);
  }
}

export const deleteKata = async (id: string) => {
  try {
    return await katasModel.deleteOne({ _id: id })
  } catch (error) {
    logError('Error in DeleteKata ORM ' + error);
  }
}

export const updateKata = async (id: string, kata: any) => {
  try {
    return await katasModel.updateOne({_id: id}, { $set: kata});
  } catch (error) {
    logError('Error in UpdateKata ORM ' + error);
  }
}

export const createKata = async (kata: any) => {
  try {
    return await katasModel.insertMany([kata])
  } catch (error) {
    logError('Error in CreateKata ORM ' + error);
  }
}