const express =require('express')
const router = express.Router()
const { getCategoris, setCategory, updateCategory,deleteCategory, getCategoryById,getCategoryBySeason}= require('../controllers/categoriesController')
const catupload=require("../middleware/catupload");

router.get('/', getCategoris)

router.get('/:id', getCategoryById)

router.get('/category/:season?', getCategoryBySeason);

router.post('/', catupload.single('image'),setCategory)



router.put('/:id', updateCategory)


router.delete('/:id', deleteCategory)

module.exports = router