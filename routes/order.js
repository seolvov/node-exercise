import express from "express";
import Product from "./product.js";

const router = express.Router()

router.get("/", (req, res) => {
    res.json({
        msg: "order get all"
    })
})
router.post("/", (req, res) => {
    const userInput = {
        id: req.body.orderId,
        pw: req.body.orderPw
    }
    res.json({
        msg: "post ! ",
        order: userInput
    })
})
router.put("/", (req, res) => {
    res.json({
        msg: "put ! "
    })
})
router.delete("/", (req, res) => {
    res.json({
        msg: "delete !"
    })
})


export default router