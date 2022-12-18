import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import routes from '../routes'
import helmet from 'helmet';
import cors from 'cors';

// Configuration .env file
dotenv.config();

// Create Express App
const app: Express = express();
const port: number | string = process.env.PORT || 3000;

// Define Server to use Routes
app.use('/', routes);

app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));

export default app;
