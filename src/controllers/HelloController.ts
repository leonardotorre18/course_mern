import { BasicResponse } from "./types";
import { IBasicController } from "./interfaces";
import { logInfo } from "../utils/logger";

export class HelloController implements IBasicController {
  public async getMessage(name?: string | undefined): Promise<BasicResponse> {
    logInfo('Hello Route');;
    return {
      message: `Hello ${name || "Word"}!`
    }
  }
}