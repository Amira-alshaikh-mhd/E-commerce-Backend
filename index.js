const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const mongoose = require("mongoose");
const connectDB = require('./config/db')

const port = process.env.PORT || 5000;
require("./config/db");

connectDB()

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/orders", require("./routes/orderRoute"));
app.use(errorHandler);

app.listen(port, () => console.log(`Server is starting on port ${port}`));