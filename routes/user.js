import express from "express";
import userModel from "../models/user.js";
import bcrypt from "bcryptjs" //암호화해주는 라이브러리
import jwt from "jsonwebtoken"
import {allHandling, getProfileByToken, loginHandling, signupHandling} from "../controllers/user.js";
import {protect} from "../middleware/authMiddleware.js";

const router = express.Router()

//java 에서 controller 부분
//회원가입
router.post("/signup", signupHandling) //signHandling : 비즈니스 로직
//로그인
router.post("/login", loginHandling)
//프로필정보
router.get("/", protect, getProfileByToken)
//정보가져오기
router.get("/all", allHandling)

export default router