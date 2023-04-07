require("dotenv").config();
 const mongoose = require("mongoose");
const connection = require("./config/db");
const express = require("express");
const app = express();
const cors = require('cors');


mongoose.set("strictQuery", true);

connection();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));