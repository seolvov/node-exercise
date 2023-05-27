import orderModel from "../models/order.js";

const getAllOrders = async (req, res) => {
    const orders = await orderModel
        .find()
        // .populate("product", ["title", "price"])
        .populate("product") //다 가져올 때
        .populate("user")

    res.json({
        msg: "order get all",
        orders
    })
}

const createOrder = async (req, res) => {
    const { product, qty, memo } = req.body

    const newOrder = new orderModel({
        product, qty, memo, user: req.user._id
    })

    const createdOrder = await newOrder.save()

    res.json({
        msg: "successful new order",
        order: createdOrder
    })
}

const updateOrder = (req, res) => {
    res.json({
        msg: "put ! "
    })
}

const deleteOrder = (req, res) => {
    res.json({
        msg: "delete !"
    })
}

export { getAllOrders, createOrder, updateOrder, deleteOrder }