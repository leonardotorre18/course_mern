import { Request, response, Response, Router } from "express";
import IUser from "src/domain/interfaces/IUser";
import bcript from "bcrypt";
import { AuthController } from "../controllers/AuthController";

const controller = new AuthController()

const router = Router();

router.post('/register', async (req: Request, res: Response) => {
  const {
    name,
    email,
    age,
    password
  }: IUser = req.body;
  let response: any;

  /* 
    Validating all campus
  */
  if (name && email && age && password) {
    /*
      Getting password in register router
      Encryting pass
    */
    const ashedPassword = await bcript.hashSync(password, 8)

    /* 
      Setting validated user to controller
    */
    response = await controller.register({
      name,
      email,
      age,
      password: ashedPassword
    });
    /* 
      Error response
    */
  } else response = {error: 'User is invalid'}

  res.send(response)
});

router.post('/login', async (req: Request, res: Response) => {
  const {
    email,
    password
  }: IUser = req.body;
  let response: any;

  if (email && password) {
    response = await controller.login({email, password})
  } else response = {error: 'User is invalid'}

  res.send(response)
});

export default router;