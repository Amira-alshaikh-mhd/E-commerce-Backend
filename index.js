require("dotenv").config();
 const mongoose = require("mongoose");
const connection = require("./config/db");
const express = require("express");
const app = express();
const cors = require('cors');
const {errorHandler} = require('./middleware/categoriesmiddleware')


connection();

const CategoryModel = require('./models/categorisModel')

mongoose.set("strictQuery", true);








app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/cat', require('./routes/categoriesRoutes'))
  app.use(errorHandler)
const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));