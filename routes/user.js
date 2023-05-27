import express from "express";
import userModel from "../models/user.js";
import bcrypt from "bcryptjs" //암호화해주는 라이브러리
import jwt from "jsonwebtoken"
import {allHandling, loginHandling, signupHandling} from "../controllers/user.js";

const router = express.Router()

//회원가입
router.post("/signup", signupHandling)
//로그인
router.post("/login", loginHandling)
//정보가져오기
router.get("/all", allHandling)

export default router