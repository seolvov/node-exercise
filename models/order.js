import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
    {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product", //어느 테이블을 참조할건지
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