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

app.get('/bye', (req: Request, res: Response) => {

  // Reponse
  res.setHeader('Content-Type', 'application/json')
    .status(200)
    .json({
      "data": { "message": "Goodbye, world" }
    });
});

app.get('/hello', (req: Request, res: Response) => {

  // Get Query
  const { name } = req.query;

  // Reponse
  res.setHeader('Content-Type', 'application/json')
    .status(200)
    .json({
      "data": { "messague": `Hola, ${name || 'anónimo'}` }
    });
});

// Listening
app.listen(port, () => console.log(`Server running in http://localhost:${port}`));
