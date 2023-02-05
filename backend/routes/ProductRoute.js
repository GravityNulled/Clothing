const { verifyTokenAdmin } = require("../utils/verifyToken");
const Product = require("../models/ProductModel");
const router = require("express").Router();

// CREATE PRODUCT
router.post("/create", verifyTokenAdmin, async (req, res) => {
  const product = new Product({
    title: req.body.title,
    desc: req.body.desc,
    img: req.body.img,
    categories: req.body.categories,
    price: req.body.price,
    size: req.body.size,
    color: req.body.color,
  });
  try {
    const savedProduct = await product.save();
    res.status(200).send(savedProduct);
  } catch (error) {
    res.status(500).send(error);
  }
});

//UPADTE PRODUCT
router.put("/update/:id", verifyTokenAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json("Server Error");
  }
});

//GET PRODUCT
router.get("/get/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).send(product);
  } catch (error) {
    res.status(404).send("No Product Found");
  }
});

//GET ALL PRODUCT
router.get("/", async (req, res) => {
  let products;
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).send(products);
  } catch (error) {
    res.status(404).send("No Product Found");
  }
});

//DELETE PRODUCT
router.delete("/delete/:id", verifyTokenAdmin, async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});
module.exports = router;
