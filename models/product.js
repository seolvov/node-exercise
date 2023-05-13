import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    //5
    {
        title: String, //제품 명
        price: Number, //제품 가격
        description: String, //제품 설명
        brand: String, //브랜드
        company: String, //제조 기업
        stock: Number //재고량
    },
    {
        timestamps: true
    }
)






//3
const productModel = productSchema.model("product", productSchema) //테이블명 설정

//4
export default productModel