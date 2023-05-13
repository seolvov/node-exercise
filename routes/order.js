import express from "express";
import Product from "./product.js";

const router = express.Router()

router.get("/", (req, res) => {
    res.json({
        msg: "order get all"
    })
})
router.post("/", (req, res) => {
    res.json({
        msg: "post ! "
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