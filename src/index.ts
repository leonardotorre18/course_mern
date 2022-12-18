import dotenv from 'dotenv';
import app from './server'
import { logError } from './utils/logger';

// Configuration .env file
dotenv.config();
const port: number | string = process.env.PORT || 3000;

// Listening
app.listen(port, () => console.log(`Server running in http://localhost:${port}`));
app.on('error', (error) => {
  logError(`${error}`);
})