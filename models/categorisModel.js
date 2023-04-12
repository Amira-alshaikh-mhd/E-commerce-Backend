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
        public_id: {
            type: String,
            required:true
        },
        url:{
            type: String,
            required:true
        }
    },
})


const CategoryModel = mongoose.model("categoris", CategorySchema)

module.exports = CategoryModel