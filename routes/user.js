import express from "express";
import userModel from "../models/user.js";

const router = express.Router()

//회원가입
router.post("/signup", async (req, res) => {
    const { email, password, userName, address, phone } = req.body
    const newUser = new userModel({
        email, password, userName, address, phone
    })
    const createdUser = await newUser.save()
    res.json({
        msg: "created ID",
        user: createdUser
    })
})
//로그인
router.post("/login", async (req, res) => {
    res.json({
        msg: "success"
    })
})
//정보가져오기
router.get("/", async (req, res) => {
    res.json( {
        msg: "get all"
    })
})

export default router