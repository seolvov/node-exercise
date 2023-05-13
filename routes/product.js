import express from "express";
import productModel from "../models/product.js";

const router = express.Router()

router.get("/all", (req, res) => {
    res.json({
        msg: "product get all"
    })
})
router.post("/", async (req, res) => {
    // const userInput = {
    //     name: req.body.productName,
    //     price: req.body.productPrice,
    //     stock: req.body.productStock
    // }
    //
    // title: String, //제품 명
    // price: Number, //제품 가격
    // description: String, //제품 설명
    // brand: String, //브랜드
    // company: String, //제조 기업
    // stock: Number //재고량
    const userInput = new productModel({
        title: req.body.productTitle,
        price: req.body.productPrice,
        description: req.body.productDescription,
        brand: req.body.productBrand,
        company: req.body.productCompany,
        stock: req.body.productStock
    })

    const newProduct = await userInput.save()

    res.json({
        msg: "created a product",
        product: newProduct
    })
})
router.put("/", (req, res) => {
    res.json({
        msg: "updated a product"
    })
})
router.delete("/", (req, res) => {
    res.json({
        msg: "deleted a product"
    })
})

export default router