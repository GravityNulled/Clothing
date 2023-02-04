const CryptoJS = require("crypto-js");
const User = require("../models/UserModel");
const { verifytokenAuth } = require("../utils/verifyToken");

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

module.exports = router;
