import express from "express";
import {
    createProduct, deleteAllProducts, deleteAProductById,
    getAllProducts, getAProductById, updateProductById
} from "../controllers/product.js";
import {protect, admin} from "../middleware/authMiddleware.js";

const router = express.Router()

router.get("/all", getAllProducts)
//상세 데이터 가져오는 API
router.get("/:productId", protect, getAProductById)
router.post("/", protect, admin, createProduct)
router.put("/:productId", protect, admin, updateProductById)
//전체 삭제 api
router.delete("/", protect, admin, deleteAllProducts)
//하나만 삭제 api
router.delete("/:productId", protect, admin, deleteAProductById)

export default router