import express from 'express';
import multer from 'multer';
import { addFood, listFood, removeFoodItem } from '../controllers/foodController.js';

const foodRouter = express.Router();

import path from "path";

const storage = multer.diskStorage({
  destination: "/mnt/data/uploads",
filename: (req, file, cb) => {
  const ext = path.extname(file.originalname); // .jpg
  const base = path.basename(file.originalname, ext)
    .replace(/[^a-z0-9]/gi, "-")
    .toLowerCase(); // sanitize
  const cleanName = `${Date.now()}-${base}${ext}`;
  cb(null, cleanName);
}

});

const upload = multer({ storage: storage });

foodRouter.post('/add', upload.single("image"), addFood);
foodRouter.get('/list', listFood);
foodRouter.delete('/remove', removeFoodItem);

export default foodRouter;
