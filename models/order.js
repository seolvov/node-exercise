import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
    {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product", //어느 테이블을 참조할건지
            required: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId, //user 테이블의 _id를 가져온다는 뜻
            ref: "user",
            required: true
        },
        qty: {
            type: Number,
            default: 1
        },
        memo: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

const orderModel = mongoose.model("order", orderSchema)

export default orderModel