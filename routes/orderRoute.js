const express = require("express");
const router = express.Router();
const { getOrder } = require("../controllers/orderController");
const { setOrder } = require("../controllers/orderController");
const { updateOrder } = require("../controllers/orderController");
const { deleteOrder } = require("../controllers/orderController");

router.get('/', getOrder);
router.post('/', setOrder);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder); 

module.exports = router;
