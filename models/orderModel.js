const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const producttables = require('./producttables.js');


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
          type: Number,
        },
      },
    ],
    payment_type: {
      type: String,
    },
    total_price: {
      type: Number,
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
