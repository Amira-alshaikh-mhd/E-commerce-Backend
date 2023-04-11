require("dotenv").config();
const mongoose = require("mongoose");
const connection = require("./config/db");
const express = require("express");
const app = express();
const cors = require('cors');
const productRoute=require("./routes/productRoutes")

mongoose.set("strictQuery", true);

connection();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/product",productRoute);
const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));