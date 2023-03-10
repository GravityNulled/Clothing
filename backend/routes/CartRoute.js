const router = require("express").Router();
const Cart = require("../models/CartModel");
const { verifytokenAuth, verifyTokenAdmin } = require("../utils/verifyToken");

//GET SINGLE CART
router.get("/get/:id", verifytokenAuth, async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    res.status(200).send(cart);
  } catch (error) {
    res.status(404).send("No Cart Found");
  }
});

//GET ALL CARTS
//ACCESS ADMINS
router.get("/", verifyTokenAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).send(carts);
  } catch (error) {
    res.status(404).send("No Carts Found");
  }
});

//CREATE
router.post("/create", verifytokenAuth, async (req, res) => {
  const cart = new Cart(req.body);
  try {
    const savedCart = await cart.save();
    res.status(201).send(savedCart);
  } catch (error) {
    res.status(500).send("Bad Payload");
  }
});

//UPDATE CART
router.put("/edit/:id", verifytokenAuth, async (req, res) => {
  try {
    const cart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json("Server Error");
  }
});

//DELETE CART
router.delete("/delete/:id", verifytokenAuth, async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id);
    res.status(200).send(cart);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});


module.exports = router;
