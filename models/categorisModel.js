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
        type:Object,
        
        // public_id: {
        //     type: String,
        // },
        // url:{
        //     type: String,
            
        // }
    },
})


const CategoryModel = mongoose.model("categoris", CategorySchema)

module.exports = CategoryModel