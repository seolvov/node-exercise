import express from "express"

import cors from "cors"
import morgan from "morgan"

import productRoute from "./routes/product.js";
import orderRoute from "./routes/order.js";

const app = express()

app.use(cors())
app.use(morgan('dev'))

app.use("/product", productRoute)
app.use("/order", orderRoute)

app.get("/test", (req, res) => {
    res.json({
        msg: "test api"
    })
})






const port = 8080

app.listen(port, console.log("server started"))