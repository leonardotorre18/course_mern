import express, { Request, Response } from "express";
import { HelloController } from "../controllers/HelloController";
import { logInfo, logWarning } from "../utils/logger";

const router = express.Router();

router.route('/')
  .get(async (req: Request, res: Response) => {

    let name: any = req?.query?.name;
    name ? 
      logInfo(`[/api/hello] Get param name='${name}'`) :
      logWarning('[/api/hello] Expect param "name"')

    const controller: HelloController = new HelloController();
    const response = await controller.getMessage(name);

    res
      .status(200)
      .setHeader('Content-Type', 'application/json')
      .json(response)
  });

export default router;
