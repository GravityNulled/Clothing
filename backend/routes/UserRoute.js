const router = require("express").Router();

router.get("/", async (req, res) => {
  res.send("Good request");
});

module.exports = router;
