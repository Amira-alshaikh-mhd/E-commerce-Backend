const mongoose=require ("mongoose");

const productTable=mongoose.Schema({
    title:{
        type:String
    },
    price:{
        type:String
    },
    size:{
         type: [String],
         required: true,
         minLength: 1,
         maxLength: 10
    },
     color:{
         type: [String],
         required: true,
         minLength: 1,
         maxLength: 10
        
        
     },
     Description:{
        type:String
     },
     quantity:{
        type:Number
     },
     image: [{
         public_id:{
            type: String,
            //required: true,
         },
         url:{
            type: String,
            //required: true,
         }
       }],
   
},
    {
    timestamps: true,
    }
    
)
module.exports = mongoose.model("productTable", productTable);
