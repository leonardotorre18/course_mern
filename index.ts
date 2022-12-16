import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

// Configuration .env file
dotenv.config();

// Create Express App
const app: Express = express();
const port: number | string = process.env.PORT || 3000;

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Applicacion Running');
});

// Listening
app.listen(port, () => console.log(`Server running in http://localhost:${port}`));
