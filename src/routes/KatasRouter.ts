import express, { Request, Response } from "express";
import KatasController from "../controllers/KatasController";
// import { logInfo } from "../utils/logger";

// Router from Express
const router = express.Router();

// Creating Object Controller for all routes
const controller: KatasController = new KatasController();

router.route('/')
  .get(async (req: Request, res: Response) => {

    res.send('all its ok')
  })

export default router