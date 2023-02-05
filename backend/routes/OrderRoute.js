const router = require("express").Router();
const Order = require("../models/OrderModel");
const { verifytokenAuth, verifyTokenAdmin } = require("../utils/verifyToken");

//GET SINGLE ORDER
router.get("/get/:id", verifytokenAuth, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    res.status(200).send(order);
  } catch (error) {
    res.status(404).send("No Order Found");
  }
});

//GET ALL ORDERS
//ACCESS ADMINS
router.get("/", verifyTokenAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).send(orders);
  } catch (error) {
    res.status(404).send("No Orders Found");
  }
});

//CREATE
router.post("/create", verifytokenAuth, async (req, res) => {
  const order = new Order(req.body);
  try {
    const savedOrder = await order.save();
    res.status(201).send(savedOrder);
  } catch (error) {
    res.status(500).send("Bad Payload");
  }
});

//UPDATE ORDER
router.put("/edit/:id", verifytokenAuth, async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json("Server Error");
  }
});

//DELETE ORDER
router.delete("/delete/:id", verifytokenAuth, async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    res.status(200).send(order);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});
module.exports = router;
