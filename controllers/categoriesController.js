  
const CategoryModel = require('../models/categorisModel')
const cloudinary= require ('cloudinary').v2;
const path = require("path");

cloudinary.config({
    // cloud_name: process.env.CLOUD_NAME,
    // api_key: process.env.API_KEY,
    // api_secret: process.env.API_SECRET,
    cloud_name:"dmziyyrdp",
    api_key:"155381824395299",
    api_secret:"Gc9Xsc8c4W4rsiG1-h81aYOZI9U"

});

// get all category
const getCategoris = async(req, res) => {
const categoris = await CategoryModel.find()

    res.status(200).json(categoris)
}

//get by Id
const getCategoryById = async (req, res) => {
    try {
      const category = await category.findById(req.params.id);
      if (!category) {
        return res.status(404).send();
      }
      res.send(category);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  

// post category

// const setCategory = async (req, res, next) => {

// // const {name, season, sale, image} = req.body;
    
    
// // if (!req.body.name || !req.body.season || !req.body.image) {
// // res.status(400).json({message: "Please add all the information"});

// // }

// try{
//     // const category = "category";

//     // const result =await cloudinary.uploader.upload(req.path.file);

//     const Category = await CategoryModel.create({
//             name: req.body.name,
//             season: req.body.season,
//             sale: req.body.sale,
            
//         //     image:{
//         //     public_id:result.public_id,
//         //     url:result.secure_url,
//         //   }
//     });
//     return res.status(201).json({
//         // success:true,
//         // Category
//         message: "successfully"
//     })
// }catch (error){
//         console.log(error);
//         next(error);
    
// }
// }


// const category = await CategoryModel.create({
//     name: req.body.name,
//     season: req.body.season,
//     sale: req.body.sale,
//     image:req.body.image,
    
    

// })


//     res.status(200).json(category)
// }
const setCategory=async(req,res)=>{

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

       return res.status(200).json({message: "product created successfully"})
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
    setCategory,
    updateCategory,
    deleteCategory,
}