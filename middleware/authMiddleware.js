import jwt from "jsonwebtoken";
import userModel from "../models/user.js";

const protect = async (req, res, next) => { //middelware 는 중간 역할이라 next 필요
    let token //지역상수 / const 는 글로벌

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer') //token 이 Bearer 타입
    ) {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_KEY)//token 검증 함수
            //controllers/user.js 에서 const token 에서 { userId: user._id } 이것을 decoded 로 상수화한 것
            req.user = await userModel.findById(decoded.userId)
            next()
        } catch(error) {
            res.json({
                msg: 'not authorized, token failed'
            })
        }
    }

    if(!token) {
        res.json({
            msg: 'not authorized, no token'
        })
    }
}



export { protect }