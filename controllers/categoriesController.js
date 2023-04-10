  
const CategoryModel = require('../models/categorisModel')

const getCategoris = async(req, res) => {
const categoris = await CategoryModel.find()

    res.status(200).json(categoris)
}


const setCategory = async (req, res) => {
if (!req.body.name) {
res.status(4000)
throw new Error('Please add a name')
}
const category = await CategoryModel.create({
    name: req.body.name,
    season: req.body.season,
    sale: req.body.sale,
    image: req.body.image,

})


    res.status(200).json(category)
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
 await category.remove()
    res.status(200).json({id: req.params.id})
}

module.exports ={
    getCategoris,
    setCategory,
    updateCategory,
    deleteCategory,
}