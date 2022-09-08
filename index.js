const express = require('express')
const app = express()
const productsRouter = require('./route/productsRoute')
const categoriesRouter = require('./route/categoriesRoute')
const brandsRouter = require('./route/brandRoute')

require('./db')

app.use(express.json());

app.use('/products' , productsRouter)
app.use('/categories' , categoriesRouter)
app.use('/brands' , brandsRouter)


app.listen(7000 , () => {
    console.log('Server is Running in 7000 Port');
})