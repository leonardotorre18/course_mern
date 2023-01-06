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
  })
  .delete(async (req:Request, res: Response) => {
    const { id } = req.body;
    logInfo('[/api/users/:id] Delete Id = '+ id );
    const response = await controller.deleteUser(id);
    res.send(response)
  })
  .put(async (req:Request, res: Response) => {
    const { id, name, age, email } = req.body;
    logInfo('[/api/users/] Update Id = '+id);
    const response = await controller.updateUser(id, { name, age, email });
    res.send(response)
  })
router.route('/:id')
  .get(async (req:Request, res: Response) => {
    const { id } = req.params
    logInfo('[/api/users/:id] Get Id = '+id);
    const response = await controller.getUserById(id);
    res.send(response)
  })

export default router;
