const CryptoJS = require("crypto-js");
const UserModel = require("../models/UserModel");
const User = require("../models/UserModel");
const { verifytokenAuth, verifyTokenAdmin } = require("../utils/verifyToken");

const router = require("express").Router();

// @UPDATE
router.put("/update/:id", verifytokenAuth, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.ENCRYPT
    ).toString();
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).send(updatedUser);
  } catch (error) {
    return res.status(500).send("An Error Occured!", error);
  }
});

//GET SINGLE USER
router.get("/get/:id", verifytokenAuth, async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    if (!user) return res.status(500).send("No user found!");
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send("Bad Server Error");
  }
});

//GET ALL USERS

router.get("/getall/", verifyTokenAdmin, async (req, res) => {
  const users = await User.find();
  return res.status(200).send(users);
});

module.exports = router;
