const asyncHandler = require("express-async-handler");
const OrderModel = require("../models/orderModel");
const producttables = require("../models/producttables");
const getAllOrder = async (req, res) => {
  try {
    const orders = await OrderModel.find();
    res.send(orders);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getOrder = async (req, res) => {
  try {
    const order = await OrderModel.findById(req.params.id)
    if (!order) {
      return res.status(404).send();
    }
    res.send(order);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal server error" });
  }
};
// const getOrder = async (req, res) => {
//   try {
//     const order = await Order.findById(req.params.id).populate({
//       path: 'cart.productID',
//       select: 'title' // Specify the fields you want to include
//     });
//     if (!order) {
//       return res.status(404).send();
//     }
//     res.send(order);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

const setOrder = asyncHandler(async (req, res) => {
  const order = await OrderModel.create({
    cart: req.body.cart,
    payment_type: req.body.payment_type,
    total_price: req.body.total_price,
    phone_number: req.body.phone_number,
    address: req.body.address,
  });

  await order.save();

  res.status(200).json(order);
});

const updateOrder = asyncHandler(async (req, res) => {
  const order = await OrderModel.findById(req.params.id);

  if (!order) {
    res.status(400);
    throw new Error("Order not found");
  }
  console.log(order.cart);
  const updatedOrder = await OrderModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json({ updatedOrder });
});

const deleteOrder = asyncHandler(async (req, res) => {
  const order = await OrderModel.findById(req.params.id);

  if (!order) {
    res.status(400);
    throw new Error("Order not found");
  }

  await OrderModel.deleteOne({ _id: req.params.id });

  res.status(200).json({ id: req.params.id });
});

const deletecart = asyncHandler(async (req, res) => {
  const order = await OrderModel.findOne({ "cart._id": req.params.id });

  if (!order) {
    res.status(404);
    throw new Error("Order not found");
  }

  order.cart = order.cart.filter(
    (item) => item._id.toString() !== req.params.id
  );
  await order.save();

  res.status(200).json({ message: "Cart deleted successfully" });
  if (order.cart.length === 0) {
    const idd = order._id;
    await OrderModel.findByIdAndDelete(idd);
    return res.status(200).json({ message: "Order deleted successfully" });
  }
});

module.exports = {
  getAllOrder,
  getOrder,
  setOrder,
  updateOrder,
  deleteOrder,
  deletecart,
};
