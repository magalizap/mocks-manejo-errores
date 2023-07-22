import { Router } from "express";
import CustomError from "../services/custom/customError.js";
import EErrors from "../services/errors/enum.js";
import { generateProductErrorInfo } from "../services/errors/info.js";
const productRouter = Router()

const products = []

productRouter.get('/', (req, res) => {
    res.send({status: 'Success', payload: products})
})

productRouter.post('/', (req, res) => {
    const { title, description, price, thumbnail, code, stock, status, category } = req.body
    if(!title || !price || !stock){
        CustomError.createError({
            name: 'Product creation error',
            cause: generateProductErrorInfo({title, description, price, thumbnail, code, stock, status, category}),
            message: 'Error trying to create Product',
            code: EErrors.INVALID_TYPES_ERROR
        })
    }
    const product = {
        title, 
        description, 
        price, 
        thumbnail, 
        code, 
        stock, 
        status, 
        category
    }
    if(products.length === 0){
        product.id = 1
    }else{
        product.id = products[products.length-1].id+1
    }
    products.push(product)
    console.log(product)
    res.send({status: 'Success', payload: product})
})

export default productRouter