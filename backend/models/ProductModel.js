const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: Array },
    price: { type: Number, required: true },
    size: { type: String, default: "Medium" },
    color: { type: String, default: "white" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
