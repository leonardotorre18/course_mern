import express, { Request, Response } from "express";
import { verifytoken } from "../middlewares/verifytoken";
import { UserController } from "../controllers/UsersController";
import { logInfo } from "../utils/logger";

// Router from Express
const router = express.Router();

// Creating Object Controller for all routes
const controller: UserController = new UserController();

router.route('/')
  .get(verifytoken, async (req: Request, res: Response) => {
    const { id } = req.query;

    if (id) {
      logInfo('[/api/users] Get User by Id: ' + id)
      res.send(await controller.getUserById(id))
    } else {
      logInfo('[/api/users] Get All Users')
      res.send(await controller.getUsers())
    }
  })

  .delete(verifytoken, async (req:Request, res: Response) => {
    const { id } = req.body;
    logInfo('[/api/users] Delete Id = '+ id );
    const response = await controller.deleteUser(id);
    res.send(response)
  })
  
  .put(verifytoken, async (req:Request, res: Response) => {
    
    const { id, name, age, email } = req.body;
    logInfo('[/api/users/] Update Id = '+id);
    const response = await controller.updateUser(id, { name, age, email });
    res.send(response)
  })

export default router;
