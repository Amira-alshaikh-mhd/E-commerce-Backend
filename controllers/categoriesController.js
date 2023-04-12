  
const CategoryModel = require('../models/categorisModel')
const cloudinary = require("../config/cloudinary.js");

// get all category
const getCategoris = async(req, res) => {
const categoris = await CategoryModel.find()

    res.status(200).json(categoris)
}

  

// post category

const setCategory = async (req, res, next) => {

    const {name, season, sale, image} = req.body;
    
    
if (!req.body.name || !req.body.season || !req.body.image) {
res.status(400).json({message: "Please add all the information"});

}

try{
    // const category = "category";

    const result =await cloudinary.uploader.upload(image, {
        folder: "Avatars",
    })

    const Category = await CategoryModel.create({
        name,
        season,
        sale,
        image: result
    });
    res.status(201).json({
        success:true,
        Category
    })
}catch (error){
        console.log(error);
        next(error);
    
}
}


// const category = await CategoryModel.create({
//     name: req.body.name,
//     season: req.body.season,
//     sale: req.body.sale,
//     image:req.body.image,
    
    

// })


//     res.status(200).json(category)
// }


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
    setCategory,
    updateCategory,
    deleteCategory,
}