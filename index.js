const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routes/people");
const connectDB = require("./db/connect");
require("dotenv").config();
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/people", router);

const PORT = process.env.PORT || 4000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log("DB is connected...");
    app.listen(
      PORT,
      console.log(`server is running on port http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
