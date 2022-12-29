/**
 * Root Router
 * Redirecctions to Routers
 */

import express, { Express, Request, Response } from "express";
import helloRouter from "./HelloRouter";
import goodbyeRouter from './GoodbyeRouter'
import UsersRouter from './UsersRouter';

// Server Intance
const server: Express = express();

// Router instance
let rootRouter = express.Router();


// Router Root
rootRouter.get('/', (req: Request, res: Response) => {
  res.send('Welcomen to BackEnd Root')
});

// Router /Hello
server.use('/api', rootRouter);
server.use('/api/hello', helloRouter);
server.use('/api/goodbye', goodbyeRouter);
server.use('/api/users', UsersRouter);

// Redirect
server.get('*', (req: Request, res: Response) => {
  res.redirect('/api')
})

export default server;