import express from "express"

import cors from "cors"
import morgan from "morgan"
import bodyParser from "body-parser";
import dotEnv from "dotenv"

import connectDB from "./config/database.js"

import productRoute from "./routes/product.js";
import orderRoute from "./routes/order.js";
import userRoute from "./routes/user.js"

dotEnv.config()

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

connectDB()

app.use("/product", productRoute)
app.use("/order", orderRoute)
app.use("/user", userRoute)

app.get("/test", (req, res) => {
    res.json({
        msg: "test api"
    })
})






// const port = 8080
const port = process.env.PORT || 9090

app.listen(port, console.log(`server started at ${port}`))