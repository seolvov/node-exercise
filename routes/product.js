import express from "express";
import productModel from "../models/product.js";
import product from "../models/product.js";

const router = express.Router()

router.get("/all", async (req, res) => {
    const products = await productModel.find() //find() 는 array 로 return
    res.json({
        msg: "product get all",
        count: products.length,
        // products: products,
        products: products.map(item => { //해당 컬럼만 가져오기
            return {
                id: item._id,
                title: item.title,
                price: item.price
            }
        })
    })
})
//상세 데이터 가져오는 API
router.get("/:productId", async(req, res) => {
    const product = await productModel.findById(req.params.productId) //url 들어가는 params
    // if (!product) {
    //     res.json({
    //         msg: "no product"
    //     })
    // } else {
        res.json({
            msg: `successful get ${req.params.productId}`,
            product: product
        })
    // }
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
router.put("/:productId", async (req, res) => {
    const product = await productModel.findById(req.params.productId)

    if (product) {
        product.title = req.body.productTitle ? req.body.productTitle : product.title //삼항연산자
        product.price = req.body.productPrice ? req.body.productPrice : product.price
        product.description = req.body.productDescription ? req.body.productDescription : product.description
        product.brand = req.body.productBrand ? req.body.productBrand : product.brand
        product.company = req.body.productCompany ? req.body.productCompany : product.company
        product.stock = req.body.productStock ? req.body.productStock : product.stock
    }

    const updatedProduct = await product.save()

    res.json({
        msg: `updated product at ${req.params.productId}`,
        product: updatedProduct
    })
})
//전체 삭제 api
router.delete("/", async (req, res) => {
    await productModel.deleteMany()
    res.json({
        msg: "deleted all products"
    })
})
//하나만 삭제 api
router.delete("/:productId", async (req, res) => {
    // await productModel.findByIdAndRemove(req.params.productId) //두개 동일
    await productModel.findByIdAndDelete(req.params.productId)
    res.json({
        msg: `deleted a product at ${req.params.productId}`
    })
})

export default router