const mongoose=require ("mongoose");
const{Schema,model}=mongoose;
const producttables=mongoose.Schema({
    title:{
        type:String
    },
    price:{
        type:Number
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
     
     priceAfterDiscount:{
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

    category:{
        type:Schema.Types.ObjectId,
        ref:"categoris",
        required:[true, "Please include a Category"]
    }
   
},
    {
    timestamps: true,
    }
    
)
module.exports = mongoose.model("producttables", producttables);
