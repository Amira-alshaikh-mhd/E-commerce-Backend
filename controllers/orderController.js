const asyncHandler = require("express-async-handler");
const OrderModel = require("../models/orderModel");
const producttables = require("../models/producttables");
const getAllOrder = async (req, res) => {
  try {
    const orders = await OrderModel.find().populate("cart.productID").exec();
    res.send(orders);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getOrder = async (req, res) => {
  try {
    const order = await OrderModel.findById(req.params.id).populate(
      "cart.productID"
    );
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
    total_price: 0, // set initial total_price to 0
  });

  const cartItems = order.cart;

  let totalPrice = 0;

  for (let i = 0; i < cartItems.length; i++) {
    const cartItem = cartItems[i];

    const product = await producttables.findById(cartItem.productID);

    if (!product) {
      res.status(404);
      throw new Error(`Product not found with id ${cartItem.productID}`);
    }

    const itemTotalPrice = product.price * cartItem.quantity;

    totalPrice += itemTotalPrice;
  }

  order.total_price = totalPrice;
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
  const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({ updatedOrder });
});

const deleteOrder = asyncHandler(async (req, res) => {
  const order = await OrderModel.findById(req.params.id);

  if (!order) {
    res.status(400);
    throw new Error("Order not found");
  }

  await Order.deleteOne({ _id: req.params.id });

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getAllOrder,
  getOrder,
  setOrder,
  updateOrder,
  deleteOrder,
};
