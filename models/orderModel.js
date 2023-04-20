const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const Product = require('./Product');

const OrderModel = new Schema(
  {
    cart: [
      {
        productID: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: [true, "Please include a productTable"],
        },

        quantity: {
          type: String,
          required: true,
        },
      },
    ],
    payment_type: {
      type: String,
      required: true,
    },
    total_price: {
      type: String,
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "OrderModel",
  }
);

module.exports = mongoose.model("OrderModel", OrderModel);
