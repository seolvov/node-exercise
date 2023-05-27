import express from "express";
import Product from "./product.js";
import orderModel from "../models/order.js";
import {createOrder, deleteOrder, getAllOrders, updateOrder} from "../controllers/order.js";
import {protect} from "../middleware/authMiddleware.js";

const router = express.Router()

router.get("/all", getAllOrders)
router.post("/", protect, createOrder)
router.put("/", updateOrder)
router.delete("/", deleteOrder)

export default router