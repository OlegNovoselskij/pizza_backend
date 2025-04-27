import express from 'express';
import { getAdmin } from '../controllers/adminController.js';

const adminRouter = express.Router();

// Endpoint для отримання даних адміністратора
adminRouter.get("/", getAdmin);

export default adminRouter;


