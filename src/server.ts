import * as dotenv from 'dotenv';
dotenv.config();
import express, { Request, Response } from 'express';
import { app } from './app';


const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
