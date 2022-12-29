import { Route, Tags, Get, Query } from "tsoa";
import { BasicResponse } from "./types";
import { IBasicController } from "./interfaces";
import { logInfo } from "../utils/logger";

@Route("/api/hello")
@Tags("HelloController")
export class HelloController implements IBasicController {
  /**
   * Endpoint to retreive a Message "Hello {name}" in JSON
   * @param { string | undefined } name Name of user
   * @returns { Promise<BasicResponse> } Promise of BasicResponse
   */
  @Get("/")
  public async getMessage(@Query()name?: string): Promise<BasicResponse> {
    return {
      message: `Hello ${name || "Word"}!`
    }
  }
}