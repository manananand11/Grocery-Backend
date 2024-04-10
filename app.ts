// src/app.ts
import express from 'express';
import dotenv from 'dotenv';
import mainRouter from './config/router';
import bodyParser from 'body-parser';
import exceptionHandler from './app/middleware/exceptionHandler';
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.use(mainRouter);
app.use(exceptionHandler);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
