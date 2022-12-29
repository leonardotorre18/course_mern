import dotenv from 'dotenv';
import app from './server'
import { logError } from './utils/logger';
const colors = require('colors')

// Configuration .env file
dotenv.config();
const port: number | string = process.env.PORT || 3000;

// Listening
app.listen(port, () => console.log(colors.bold.brightWhite(`\nServer running in http://localhost:${port}\n`)));
app.on('error', (error) => {
  logError(`${error}`);
})
