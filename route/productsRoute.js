const express = require('express')
const router = express.Router();
const productsBL = require('../products/productsBL');
const productSchema = require('../categories/categoriesModel');

router.route('/')
    .get(async (req,res) =>
    {  
        let getProducts = await productsBL.getAllProducts()
            return res.send(getProducts)
    })

router.route('/:id')
    .get(async (req,res) =>
    {  
        let id = req.params.id
        let getProduct = await productsBL.getProduct(id)
            return res.send(getProduct)
    })


module.exports = router