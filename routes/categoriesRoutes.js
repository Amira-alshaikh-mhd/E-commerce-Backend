
const express =require('express')
const router = express.Router()
const {updateCategory}= require('../controllers/categoriesController')


router.put('/:id', updateCategory)

module.exports = router