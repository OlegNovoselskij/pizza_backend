import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: [
    {
      amount: { type: Number, required: true }, // Ціна
      weight: { type: String, required: true }, // Вага (наприклад "300g")
    },
  ],
  image: { type: String, required: true },
  category: { type: String, required: true },
});

const foodModel = mongoose.models.Food || mongoose.model("Food", foodSchema);

export default foodModel;
