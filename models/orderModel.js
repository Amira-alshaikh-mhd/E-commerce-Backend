const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const producttables = require('./producttables');

const OrderModel = new Schema(
  {
    cart: [
      {
        productID: {
          type: Schema.Types.ObjectId,
          ref: "producttables",
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
