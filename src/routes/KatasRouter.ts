import express, { Request, Response } from "express";
import KatasController from "../controllers/KatasController";
import { logInfo } from "../utils/logger";
import { verifytoken } from "../middlewares/verifytoken";

// Router from Express
const router = express.Router();

// Creating Object Controller for all routes
const controller: KatasController = new KatasController();

router.route('/')
  .get(verifytoken, async (req: Request, res: Response) => {
    const response = await controller.getKatas();
    logInfo(`[/api/katas] Replied with ${response.length} results`);
    res.send(response)
  })
  .post(verifytoken, async (req: Request, res: Response) => {
    logInfo(`[/api/katas] Add New Kata`);
    const {
      name,
      description,
      level,
      date,
      user,
      valoration,
      changes
    } = req.body
    const response = await controller.createKata({
      name,
      description,
      level,
      date,
      user,
      valoration,
      changes
    });
    res.send(response)
  })
  .put(verifytoken, async (req: Request, res: Response) => {
    const {
      id,
      name,
      description,
      level,
      date,
      user,
      valoration,
      changes
    } = req.body
    const response = await controller.updateKata(id, {
      name,
      description,
      level,
      date,
      user,
      valoration,
      changes
    })
    res.send(response)
  })
  .delete(verifytoken, async (req: Request, res: Response) => {
    const { id } = req.body
    const response = await controller.deleteKata(id)
    res.send(response)
  })

router.get('/:id', verifytoken, async (req: Request, res: Response) => {
  const { id } = req.params
  const response = await controller.getKataById(id)
  res.send(response)
})

router.get('/sort/:order', verifytoken, async (req: Request, res: Response) => {
  const { order } = req.params
  const response = await controller.orderKatas(order);
  res.send(response)
})

export default router