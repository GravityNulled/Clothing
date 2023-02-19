const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
var cookieParser = require("cookie-parser");
const cors = require("cors");

const userRoute = require("./routes/UserRoute");
const authRoute = require("./routes/AuthRoute");
const productRoute = require("./routes/ProductRoute");
const cartRoute = require("./routes/CartRoute");
const orderRoute = require("./routes/OrderRoute");
dotenv.config();

const app = express();
app.use(cors());
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

app.use("/api/users", userRoute);
app.use("/api/users", authRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);
