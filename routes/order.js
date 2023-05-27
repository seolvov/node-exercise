import express from "express";
import Product from "./product.js";
import orderModel from "../models/order.js";
import {createOrder, deleteOrder, getAllOrders, updateOrder} from "../controllers/order.js";

const router = express.Router()

router.get("/all", getAllOrders)
router.post("/", createOrder)
router.put("/", updateOrder)
router.delete("/", deleteOrder)

export default router