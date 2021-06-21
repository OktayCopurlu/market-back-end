const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const serverless = require("serverless-http");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger/swagger.json");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(cookieParser());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log("Server is running on port:" + port);
});

const uri =
  "mongodb+srv://Oktay:Oktay1299@cluster0.b2ny3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MangoDB database connection established successfully");
});

const clothesRouter = require("./routes/products");
const wishesRouter = require("./routes/wish");
const usersRouter = require("./routes/users");

app.use("/products", clothesRouter);
app.use("/wishes", wishesRouter);
app.use("/users", usersRouter);

module.exports.handler = serverless(app);
