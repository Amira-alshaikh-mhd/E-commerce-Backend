const express = require("express");
const router = express.Router();
const { getOrder } = require("../controllers/orderController");
const { getAllOrder } = require("../controllers/orderController");
const { setOrder } = require("../controllers/orderController");
const { updateOrder } = require("../controllers/orderController");
const { deleteOrder } = require("../controllers/orderController");
const { deletecart } = require("../controllers/orderController")

router.get('/', getAllOrder);
router.post('/', setOrder);
router.get('/:id',getOrder )
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder); 
router.delete('/cart/:id', deletecart)

module.exports = router;
