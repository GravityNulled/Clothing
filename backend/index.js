const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
var cookieParser = require("cookie-parser");

const userRoute = require("./routes/UserRoute");
const authRoute = require("./routes/AuthRoute");
dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

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
app.use("/api/user", authRoute);
