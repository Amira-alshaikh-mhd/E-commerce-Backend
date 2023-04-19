require("dotenv").config();
const mongoose = require("mongoose");
const connection = require("./config/db");
const express = require("express");
const app = express();
const cors = require('cors');
const productRoute=require("./routes/productRoutes");
const fs=require('fs');
connection();
mongoose.set("strictQuery", true);



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/users',require("./routes/userRoutes"))

app.use("/product",productRoute);
app.use('/cat', require('./routes/categoriesRoutes'))
const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));