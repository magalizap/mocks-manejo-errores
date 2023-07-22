import express from 'express'
import fackeProductRouter from './routes/fakeProduct.routes.js'
import productRouter from './routes/product.routes.js'
import errorHandler from './middleware/index.js'

const app = express()
app.use(express.json())
const PORT = 8080

app.use('/mockingproducts', fackeProductRouter)
app.use('/api/product', productRouter)
app.use(errorHandler)



app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})