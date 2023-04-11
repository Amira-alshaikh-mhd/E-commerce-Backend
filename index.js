require("dotenv").config();
 const mongoose = require("mongoose");
const connection = require("./config/db");
const express = require("express");
const app = express();
const cors = require('cors');
const {errorHandler} = require('./middleware/categoriesmiddleware')

connection();

// mongoose.connect("mongodb+srv://Amira:KRsRFp2PNaxWst9l@cluster0.bmlw1c9.mongodb.net/?retryWrites=true&w=majority")
const CategoryModel = require('./models/categorisModel')

mongoose.set("strictQuery", true);

// get request
// app.get("/cat", async (req, res)=>{
//     const categoris = await CategoryModel.find;
//     res.json(categoris)
    

// })


// create category

// app.post("/creat", async (req, res)=>{
//     const category =req.body;
//     const name =req.body
//     const newCategory = new CategoryModel(category)
//     await newCategory.save();

//     res.json(category)
    

// })






app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/cat', require('./routes/categoriesRoutes'))
  app.use(errorHandler)
const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));