import GoodbyeController from '../controllers/GoodbyeController';
import express, { Request, Response } from 'express';

const router = express.Router();

router.route('/')
  .get(async (req: Request, res: Response) => {
    const name: any = req?.query?.name;
    const controller = new GoodbyeController();
    const response = await controller.getMessage(name);
    res
      .status(200)
      .setHeader('Content-Type', 'application/json')
      .json(response)
  })

export default router;