import { Router } from "express";
import { createRandomProducts } from "../utils/products.js";

const fackeProductRouter = Router()

fackeProductRouter.get('/', async (req, res) => {
    const products = []
    for (let i = 0; i < 100; i++) {
        products.push(createRandomProducts())
    }
    res.json({status :'success', payload:products})
})

export default fackeProductRouter