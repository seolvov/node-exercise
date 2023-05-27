import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    // 패스워드, 이름, 주소, 이메일, 휴대전화, 비고
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true
        },
        userName: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    {
        timestamps: true
    }
)

const userModel = mongoose.model("user", userSchema)

export default userModel