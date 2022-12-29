import GoodbyeController from '../controllers/GoodbyeController';
import express, { Request, Response } from 'express';
import { logInfo, logWarning } from "../utils/logger";

const router = express.Router();

router.route('/')
  .get(async (req: Request, res: Response) => {

    let name: any = req?.query?.name;
    name ? 
      logInfo(`[/api/goodbye] Get param name='${name}'`) :
      logWarning('[/api/goodbye] Expect param "name"')

    const controller: GoodbyeController = new GoodbyeController();
    const response = await controller.getMessage(name);

    res
      .status(200)
      .setHeader('Content-Type', 'application/json')
      .json(response)
  })

export default router;