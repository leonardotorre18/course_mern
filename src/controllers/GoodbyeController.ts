import { logInfo } from "../utils/logger";
import { IBasicController } from "./interfaces";
import { DateResponse } from "./types";

class GoodbyeController implements IBasicController {
  public async getMessage(name?: string | undefined): Promise<DateResponse> {
    return {
      message: `Goodbye ${name || "Word"}`,
      Date: new Date()
    }
  }
}

export default GoodbyeController;