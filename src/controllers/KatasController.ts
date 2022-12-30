import { logError } from "../utils/logger";
import { IKatasController } from "./interfaces";
import {
  getAllKatas,
  getKataById,
  deleteKata,
  updateKata,
  createKata
} from "../domain/orm/katas.orm";

class KatasController implements IKatasController {
  public async getKatas(): Promise<any> {
    try {
      return await getAllKatas();
    } catch (error) {
      logError(`Kata Controller ${error}`)
    }
  }
  public async getKataById(id: string): Promise<any> {
    try {
      return await getKataById(id);
    } catch (error) {
      logError(`Kata Controller ${error}`)
    }
  }
  public async deleteKata(id: string): Promise<any> {
    try {
      return await deleteKata(id);
    } catch (error) {
      logError(`Kata Controller ${error}`)
    }
  }
  public async updateKata(id: string, kata: any): Promise<any> {
    try {
      return await updateKata(id, kata);
    } catch (error) {
      logError(`Kata Controller ${error}`)
    }
  }
  public async createKata(kata: any): Promise<any> {
    try {
      return await createKata(kata);
    } catch (error) {
      logError(`Kata Controller ${error}`)
    }
  }
}

export default KatasController;