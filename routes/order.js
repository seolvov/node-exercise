import express from "express";
import {createOrder, deleteOrder, getAllOrders, updateOrder} from "../controllers/order.js";
import {protect, admin} from "../middleware/authMiddleware.js";
import orderModel from "../models/order.js";

const router = express.Router()

router.get("/all", protect, admin, getAllOrders)
router.get("/:orderId", protect, async (req, res) => {
    const { orderId } = req.params
    const order = await orderModel
        .findById(orderId)
        .populate("product")
        .populate("user") //user 를 가져오면 19line에 order.user 를 전체로 가져오기때문에 _id를 넣어서 지정해줘야함

    // console.log(order.user)
    // console.log(req.user._id)

    if(order.user._id.toString() !== req.user._id.toString()) {
        return res.json({
            msg: 'it is not your order'
        })
    }
    res.json({
        msg: 'it is your order',
        order
    })
})
router.post("/", protect, createOrder)
router.put("/", updateOrder)
router.delete("/", deleteOrder)

export default router