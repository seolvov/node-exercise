import express from "express";
import {getAllUsers, getProfileByToken, loginHandling, signupHandling} from "../controllers/user.js";
import {protect, admin} from "../middleware/authMiddleware.js";

const router = express.Router()

//java 에서 controller 부분
//회원가입
router.post("/signup", signupHandling) //signHandling : 비즈니스 로직
//로그인
router.post("/login", loginHandling)
//프로필정보
router.get("/", protect, getProfileByToken)
//정보가져오기
router.get("/all", protect, admin, getAllUsers)

export default router