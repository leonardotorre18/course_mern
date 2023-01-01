import { Get, Route, Tags } from "tsoa";
import { logError } from "../utils/logger";
import { IKatasController } from "./interfaces";
import {
  getAllKatas,
  getKataById,
  deleteKata,
  updateKata,
  createKata,
  orderLevelKatas,
  fiveNewKatas,
  orderValorationKatas,
  orderIntentsKatas
} from "../domain/orm/katas.orm";

@Route('/api/katas')
@Tags('KatasController')
class KatasController implements IKatasController {
  /**
   * Endpoint to retrieve all katas 
   */
  @Get('/')
  public async getKatas(): Promise<any> {
    try {
      return await getAllKatas();
    } catch (error) {
      logError(`Kata Controller ${error}`)
    }
  }
  /**
   * Endpoint to retrieve one kata that your id have been equal to id in param
   * @param {string} id
   */
  @Get('{:id}')
  public async getKataById(id: string): Promise<any> {
    try {
      return await getKataById(id);
    } catch (error) {
      logError(`Kata Controller ${error}`)
    }
  }
  /**
   * Endpoint delete one kata that your id have been equal to id in param
   * @param {string} id 
   */
  public async deleteKata(id: string): Promise<any> {
    try {
      return await deleteKata(id);
    } catch (error) {
      logError(`Kata Controller ${error}`)
    }
  }
  /**
   * Endpoing update one kata
   * @param {string} id 
   * @param {object} kata
   */
  public async updateKata(id: string, kata: any): Promise<any> {
    try {
      return await updateKata(id, kata);
    } catch (error) {
      logError(`Kata Controller ${error}`)
    }
  }
  /**
   * Endpoint Insert one kata to resive from param
   * @param {object} kata 
   */
  public async createKata(kata: any): Promise<any> {
    try {
      return await createKata(kata);
    } catch (error) {
      logError(`Kata Controller ${error}`)
    }
  }

  public async orderKatas(order: string): Promise<any> {
    try {
      if (order == 'level') return await orderLevelKatas();
      if (order == 'date') return await fiveNewKatas();
      if (order == 'valoration') return await orderValorationKatas();
      if (order == 'changes') return await orderIntentsKatas();
      else return {}
    } catch (error) {
      logError('Error in orderKatas Controller ' + error)
    }
  }
}

export default KatasController;