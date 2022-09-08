const express = require('express')
const router = express.Router();
const brandBL = require('../brand/brandBL');
const productsBL = require('../products/productsBL');


router.route('/')
    .get(async (req,res) =>
    {  
        let getCategory = await brandBL.getAllBrands()
            return res.send(getCategory)
    })

router.route('/:id')
    .get(async (req,res) =>
    {  
        let id = req.params.id
        let getBrand = await brandBL.getBrand(id)
        let getProduct = await productsBL.getAllProducts()
        let filter = getProduct.filter(product => product.Brand === getBrand.Brand)
        let data = [{Brand_ID : getBrand.Brand_ID , Brand_Name : getBrand.Brand, products : filter} ]
        return res.send(data)
    })


module.exports = router