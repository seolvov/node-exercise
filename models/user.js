import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {},
    {
        timestamps: true
    }
)

const userModel = mongoose.model("user", userSchema)

export default userModel