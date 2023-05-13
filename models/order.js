import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
    {
        title: String,
        price: Number,
        description: String,
        brand: String,
        company: String,
        stock: Number
    },
    {
        timestamps: true
    }
)

const orderModel = mongoose.model("order", orderSchema)

export default orderModel