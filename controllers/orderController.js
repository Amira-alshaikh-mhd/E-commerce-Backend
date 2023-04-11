const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel");

const getOrder = asyncHandler(async (req, res) => {
  const orders = await Order.find({});
  res.status(200).json({ orders });
});

const setOrder = asyncHandler(async (req, res) => {
  const order = await Order.create({
    cart: req.body.cart,
    payment_type: req.body.payment_type,
    total_price: req.body.total_price,
  });
  res.status(200).json(order);
});

const updateOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    res.status(400);
    throw new Error("Order not found");
  }
  console.log(order.cart);
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ updatedOrder });
});

const deleteOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    res.status(400);
    throw new Error("Goal not found");
  }
  await order.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getOrder,
  setOrder,
  updateOrder,
  deleteOrder,
};
