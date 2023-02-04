const router = require("express").Router();
const User = require("../models/UserModel");
const CryptoJS = require("crypto-js");
const Jwt = require("jsonwebtoken");
// @REGISTER
router.post("/register", async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.ENCRYPT
    ).toString(),
    email: req.body.email,
  });

  try {
    const savedUser = await user.save();
    const { password, ...data } = savedUser._doc;
    res.status(201).json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e });
  }
});

//@LOGIN

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(401).send("Unauthorized");
  const { password, ...userInfo } = user._doc;
  const originalPassword = CryptoJS.AES.decrypt(
    user.password,
    process.env.ENCRYPT
  ).toString(CryptoJS.enc.Utf8);
  if (originalPassword != req.body.password) {
    return res.status(401).send("Email or password is incorrect");
  }
  const accessToken = Jwt.sign(
    {
      id: user.id,
      isAdmin: user.isAdmin,
    },
    process.env.JWT
  );

  return res.status(200).send({ userInfo, accessToken });
});

module.exports = router;
