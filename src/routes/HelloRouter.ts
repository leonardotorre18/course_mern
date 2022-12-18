import express, { Request, Response } from "express";
import { HelloController } from "../controllers/HelloController";
import { logInfo } from "../utils/logger";

// Router from Express
const router = express.Router();


router.route('/')
  .get(async (req: Request, res: Response) => {
    let name: any = req?.query?.name;
    logInfo(`Get Query Param: ${name}`);
    const controller: HelloController = new HelloController();
    const response = await controller.getMessage(name);

    return res.send(response)
  });

export default router;