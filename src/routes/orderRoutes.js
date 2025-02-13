const express = require("express");
const router = express.Router();
const orderControllers = require("../controllers/orderController");

router.get("/orders", orderControllers.getAllOrders);
router.post("/orders", orderControllers.addOrder);
router.delete("/orders/:id", orderControllers.deleteOrder);
router.get("/orders/:id", orderControllers.getOrderById);

module.exports = router;