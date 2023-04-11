
const express = require('express');
const Product = require('../models/productModel');

//create a product
const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};


// READ all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
};

// READ a single product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send();
    }
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

// UPDATE a product by ID
const updateProductById = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['title','price', 'size','color', 'Description','quantity'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send();
    }
    updates.forEach((update) => product[update] = req.body[update]);
    await product.save();
    res.send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};



// DELETE a product by ID
const deleteProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).send("Not found");
    }
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};



module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById
}