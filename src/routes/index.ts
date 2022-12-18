/**
 * Root Router
 * Redirecctions to Routers
 */

import { logInfo } from "../utils/logger";
import express, { Express, Request, Response } from "express";
import helloRouter from "./HelloRouter";
import goodbyeRouter from './GoodbyeRouter'

// Server Intance
const server: Express = express();

// Router instance
let rootRouter = express.Router();


// Router Root
rootRouter.get('/', (req: Request, res: Response) => {
  logInfo('RootRoute of Application')
  res.send('Welcomen to BackEnd Root')
});

// Router /Hello
server.use('/api', rootRouter);
server.use('/api/hello', helloRouter);
server.use('/api/goodbye', goodbyeRouter);

// Redirect
server.get('*', (req: Request, res: Response) => {
  res.redirect('/api')
})

export default server;