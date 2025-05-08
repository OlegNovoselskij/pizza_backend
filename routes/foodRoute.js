import express from "express";
import multer from "multer";
import {
  addFood,
  listFood,
  removeFoodItem,
} from "../controllers/foodController.js";

const foodRouter = express.Router();

// Зберігаємо файл в пам'яті (а не на диск)
const storage = multer.memoryStorage();
const upload = multer({ storage });

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.delete("/remove", removeFoodItem);

export default foodRouter;
