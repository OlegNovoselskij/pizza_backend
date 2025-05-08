import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: [
    {
      amount: { type: Number, required: true },
      weight: { type: String, required: true },
    },
  ],
  image: { type: String, required: true }, // base64
  category: { type: String, required: true },
});

const foodModel = mongoose.models.Food || mongoose.model("Food", foodSchema);

export default foodModel;
