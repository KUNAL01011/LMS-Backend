import * as dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from 'express';
import { app } from './app';



app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
