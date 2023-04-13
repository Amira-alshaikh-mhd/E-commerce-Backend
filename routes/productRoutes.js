const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');

const {createProduct}=require("../controllers/productControllers");
const{getAllProducts}=require("../controllers/productControllers");
const{getProductById}=require("../controllers/productControllers");
const{ updateProductById}=require("../controllers/productControllers");
const{deleteProductById}=require("../controllers/productControllers");

//set product
router.post("/product",upload.array('image'),createProduct);

//get all product
router.get("/product",getAllProducts);

//getProductbyID
router.get("/productbyID/:id",getProductById);

//updatebyID
router.put('/productUpdate/:id', updateProductById)

//delete
router.delete('/deleteProduct/:id',deleteProductById)

module.exports=router;