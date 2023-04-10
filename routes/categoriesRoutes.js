const express =require('express')
const router = express.Router()
const { getCategoris, setCategory, updateCategory,deleteCategory}= require('../controllers/categoriesController')


router.get('/', getCategoris)


router.post('/', setCategory)



router.put('/:id', updateCategory)


router.delete('/:id', deleteCategory)

module.exports = router