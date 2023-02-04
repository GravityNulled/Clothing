const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const userRoute = require("./routes/UserRoute");
dotenv.config();

const app = express();
app.use(morgan("dev"));

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("listening on port 5000");
    });
  })
  .catch((err) => console.log(err));

app.use("/api/user", userRoute);
