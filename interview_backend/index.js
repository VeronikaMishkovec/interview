require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const AuthRouter = require('./routes/AuthRouter')

const ErrorMiddleware = require("./middlewares/auth")

const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.json());

app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL
}));

app.use('/auth', AuthRouter);

app.use(ErrorMiddleware);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log(`Server starts on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
