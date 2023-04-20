const mongoose = require("mongoose");

const CategorySchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    season:{
        type:String,
        required:true,
    },
    sale:{
        type:Number,
    },
    image: {
        public_id:{
           type: String,
           required: true,
        },
        url:{
           type: String,
           required: true,
        }
      },
})


const CategoryModel = mongoose.model("categoris", CategorySchema)

module.exports = CategoryModel