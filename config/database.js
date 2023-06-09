import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB)
        console.log("connected database")
    } catch(err) {
        console.log(err.message)
    }
}

export default connectDB