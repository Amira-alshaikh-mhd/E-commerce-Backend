const express = require('express');
const Product = require('../models/productModel');
const cloudinary= require ('cloudinary').v2;
const Category=require('../models/categorisModel');


function calculateDiscountedPrice(price, discountPercentage) {
  return price - price * (discountPercentage / 100);
}

const categoryChangeStream = Category.watch();

categoryChangeStream.on("change", async (change) => {
  if (change.operationType === "update" && change.updateDescription.updatedFields.sale) {
    const categoryId = change.documentKey._id;
    const category = await Category.findById(categoryId);
    const discountPercentage = category.sale || 0;

    await Product.updateMany({ category: categoryId }, { $set: { priceAfterDiscount: calculateDiscountedPrice("$price", discountPercentage) } });
  }
});

module.exports = {
  calculateDiscountedPrice,
  categoryChangeStream,
};
