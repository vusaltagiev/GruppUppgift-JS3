const router = require("express").Router();
const orderModel = require("../models/orderModel");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, orderModel.createOrder);

router.get("/:id", authMiddleware, orderModel.getAllOrders);

router.get("/user", authMiddleware, orderModel.getAllOrdersForUser);

router.get("/:id", authMiddleware, orderModel.getOrderById);

router.patch("/:id", authMiddleware, orderModel.updateStatus);

module.exports = router;
