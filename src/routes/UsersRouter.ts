import express, { Request, Response } from "express";
import { UserController } from "../controllers/UsersController";
import { logInfo } from "../utils/logger";

// Router from Express
const router = express.Router();

// Creating Object Controller for all routes
const controller: UserController = new UserController();

router.route('/')
  .get(async (req: Request, res: Response) => {
    const response = await controller.getUsers();
    logInfo(`[/api/users] Replied with ${response.length} results`);
    res.send(response)
  });

router.get('/:id', async (req:Request, res: Response) => {
  const { id } = req.params
  logInfo('[/api/users/:id] Get Id = '+id);
  const response = await controller.getUserById(id);
  res.send(response)
});

export default router;