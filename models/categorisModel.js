const mongoose = require("mongoose");

const CategorySchema =new mongoose.Schema({
    name:{
        type:String,
    },
    season:{
        type:String
    },
    sale:{
        type:String,
    },
    Image:{
        type:String,
    },
})


const CategoryModel = mongoose.model("categoris", CategorySchema)

module.exports = CategoryModel