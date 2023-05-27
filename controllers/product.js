import productModel from "../models/product.js";

const getAllProducts = async (req, res) => {
    const products = await productModel.find() //find() 는 array 로 return
    res.json({
        msg: "product get all",
        count: products.length,
        // products: products,
        products: products.map(item => { //해당 컬럼만 가져오기
            return {
                id: item._id,
                title: item.title,
                price: item.price
            }
        })
    })
}

const getAProductById = async(req, res) => {
    const { productId } = req.params
    const product = await productModel.findById(productId) //url 들어가는 params
    // if (!product) {
    //     res.json({
    //         msg: "no product"
    //     })
    // } else {
    res.json({
        msg: `successful get ${productId}`,
        product //key, value 값이 동일할 때 생략 가능
    })
    // }
}

const createProduct = async (req, res) => {
    const { title, price, description, brand, company, stock } = req.body //상수화 시킴
    const userInput = new productModel({
        title, price, description, brand, company, stock //title: title, //key, value 값이 같으면 생략이 가능
    })
    const newProduct = await userInput.save()
    res.json({
        msg: "created a product",
        product: newProduct
    })
}

const updateProductById = async (req, res) => {
    const { title, price, description, brand, company, stock } = req.body
    const { productId } = req.params
    const product = await productModel.findById(productId)

    if (product) {
        product.title = title ? title : product.title //삼항연산자
        product.price = price ? price : product.price
        product.description = description ? description : product.description
        product.brand = brand ? brand : product.brand
        product.company = company ? company : product.company
        product.stock = stock ? stock : product.stock
    }

    const updatedProduct = await product.save()

    res.json({
        msg: `updated product at ${productId}`,
        product: updatedProduct
    })
}

const deleteAllProducts = async (req, res) => {
    await productModel.deleteMany()
    res.json({
        msg: "deleted all products"
    })
}

const deleteAProductById = async (req, res) => {
    const { productId } = req.params
    // await productModel.findByIdAndRemove(req.params.productId) //두개 동일
    await productModel.findByIdAndDelete(productId)
    res.json({
        msg: `deleted a product at ${productId}`
    })
}

export {
    getAllProducts, getAProductById, createProduct,
    updateProductById, deleteAllProducts, deleteAProductById
}