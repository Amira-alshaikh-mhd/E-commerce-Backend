const mongoose = require ("mongoose");
const { Schema, model } = mongoose;

const orderSchema = new Schema(
  {
    cart: [
      {
        productID: {
          type: String,
          required: true,
        },
        quantity: {
          type: String,
          required: true,
        },
        price: {
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
    collection: "Orders",
  }
);

module.exports = mongoose.model('Orders', orderSchema)