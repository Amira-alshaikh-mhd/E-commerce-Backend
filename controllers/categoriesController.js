  
const CategoryModel = require('../models/categorisModel')
const cloudinary= require ('cloudinary').v2;
const path = require("path");

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
   

});

// get all category
const getCategoris = async(req, res) => {
const categoris = await CategoryModel.find()

    res.status(200).json(categoris)
}

//get by Id
const getCategoryById = async (req, res) => {
    try {
      const category = await CategoryModel.findById(req.params.id);
      if (!category) {
        return res.status(404).send();
      }
      res.json(category);

    } catch (error) {
      res.status(500).send(error);
    }
  };





  const getCategoryBySeason = async(req, res) => {
    try {
      
      const season = req.params.season;
    
      const filter = season ? { season } : {}; 
      const categorySea = await CategoryModel.find(filter);
      
      res.status(200).json(categorySea);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  














  
const setCategory=async(req,res)=>{
    console.log("req ",req.file)
    try{
      const result = await cloudinary.uploader.upload(req.file.path);
    if(!req.body){
        return res.status(400).json({message:"Error"})
    }
    else{


        const category =await CategoryModel.create({
        name:req.body.name,
        season:req.body.season,
        sale:req.body.sale,
       
        image: {
          public_id: result.public_id,
          url: result.secure_url,
        },
    

            });

       return res.status(200).json({message: "category created successfully"})
    }}
    catch(err){
        console.log("error ",err)
    }
}


const updateCategory = async (req, res) => {
  const category =await CategoryModel.findById(req.params.id)
  
  
  if (!category){
      res.status(400)
      throw new Error('Category not found')
  }
  const updatedCategory = await CategoryModel.findByIdAndUpdate(req.params.id, req.body, {new: true,})
  
      if(req.body.sale){
          const product = await productModel.find({category: req.params.id})
          console.log('product: ' ,product)
          product.map(async (obj)=> {
              const updatedProduct = await productModel.findByIdAndUpdate(obj._id, {priceAfterDiscount: obj.price * (1- req.body.sale/100)})
  
  
          })
      }
      res.status(200).json(updatedCategory)
  }


const deleteCategory =  async(req, res) => {
    const category =await CategoryModel.findById(req.params.id)

if (!category){
    res.status(400)
    throw new Error('Category not found')
}
 await category.deleteOne()
    res.status(200).json({id: req.params.id})
}

module.exports ={
    getCategoris,
    getCategoryById,
    getCategoryBySeason,
    setCategory,
    updateCategory,
    deleteCategory,
}