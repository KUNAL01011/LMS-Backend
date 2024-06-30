import * as dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from 'express';
import {v2 as cloudinary} from "cloudinary";
import { app } from './app';
import connectDB from './utils/db';

cloudinary.config({
  cloud_name:process.env.CLOUD_NAME,
  api_key:process.env.CLOUD_API_KEY,
  api_secret:process.env.CLOUD_SECRET,
});



// create server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  connectDB();
});
