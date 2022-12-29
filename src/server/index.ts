import express, { Express } from 'express';
import dotenv from 'dotenv';
import routes from '../routes'
import helmet from 'helmet';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import mongoose from 'mongoose';
import { logSuccess } from '../utils/logger';

// Configuration .env file
dotenv.config();

// Create Express App
const app: Express = express();

// Docs Routo with Swagger Ui
app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(
    undefined,
    {
      swaggerOptions: {
        url: '/swagger.json',
        explorer: true
      }
    }
  )
);

// MongoDB connection
mongoose.set('strictQuery', true);
mongoose.connect(
  process.env.DB_URL || '', 
  () => logSuccess('MongoDB Connection is Success')
);

// Config server
app.use(express.static('public'));
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
    
// Define Server to use Routes
app.use('/', routes);
  
export default app;
