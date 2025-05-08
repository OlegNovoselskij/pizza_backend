import fs from "fs";
import foodModel from "../models/foodModel.js";

// Додавання їжі
const addFood = async (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ success: false, message: "No file uploaded" });
  }

  let image_filename = req.file.filename;
  let price = [];

  // Очікуємо що в body прийде масив об'єктів для price
  try {
    price = JSON.parse(req.body.price); // бо формдата передає як стрічку
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid price format" });
  }

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: price, // тут буде масив [{amount: 100, weight: "300g"}, ...]
    category: req.body.category,
    image: image_filename,
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food added" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Failed to add" });
  }
};

// Отримання списку їжі
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error });
  }
};

// Видалення їжі
const removeFoodItem = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    if (food) {
      fs.unlink(`/mnt/data/uploads/${food.image}`, () => {});
      await foodModel.findByIdAndDelete(req.body.id);
      res.json({ success: true, message: "Food removed" });
    } else {
      res.status(404).json({ success: false, message: "Food not found" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error });
  }
};

export { addFood, listFood, removeFoodItem };
