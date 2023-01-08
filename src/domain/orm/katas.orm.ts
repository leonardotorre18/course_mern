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

export const getPaginationKatas = async (limit: any, pag: any): Promise<any[] | undefined> => {
  try {
    return await katasModel.find({
      isDeleted: false
    }, 'name level')
    .limit(limit)
    .skip((pag - 1) * limit)
  } catch (error) {
    logError('Error in GetPaginatioKatas ORM ' + error);
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

export const orderLevelKatas = async (): Promise<any[] | undefined> => {
  try {
    const response = await katasModel.find({ isDelete: false }).sort({level: -1})
    return response
  } catch (error) {
    logError('Error in orderLevelKata ORM ' + error)
  }
}

export const fiveNewKatas = async (): Promise<any[] | undefined> => {
  try {
    const response = await katasModel.find({ isDelete: false }).sort({level: -1}).limit(5)
    return response
  } catch (error) {
    logError('Error in fiveNewKatas ORM ' + error)
  }
}

export const orderValorationKatas =async () => {
  try {
    const response = await katasModel.find({ isDelete: false }).sort({valoration: -1})
    return response
  } catch (error) {
    logError('Error in orderValorationKatas ORM ' + error)
  }
}

export const orderIntentsKatas = async () => {
  try {
    const response = await katasModel.find({ isDelete: false }).sort({changes: -1})
    return response
  } catch (error) {
    logError('Error in orderIntentsKatas ORM ' + error)
  }
}