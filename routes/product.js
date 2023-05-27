import express from "express";
import productModel from "../models/product.js";
import {
    createProduct, deleteAllProducts, deleteAProductById,
    getAllProducts, getAProductById, updateProductById
} from "../controllers/product.js";

const router = express.Router()

router.get("/all", getAllProducts)
//상세 데이터 가져오는 API
router.get("/:productId", getAProductById)
router.post("/", createProduct)
router.put("/:productId", updateProductById)
//전체 삭제 api
router.delete("/", deleteAllProducts)
//하나만 삭제 api
router.delete("/:productId", deleteAProductById)

export default router