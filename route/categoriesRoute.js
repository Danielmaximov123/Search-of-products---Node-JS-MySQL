const express = require('express')
const router = express.Router();
const categoriesBL = require('../categories/categoriesBL');
const productsBL = require('../products/productsBL');

router.route('/')
    .get(async (req,res) =>
    {  
        let getCategory = await categoriesBL.getAllCategories()
            return res.send(getCategory)
    })

    router.route('/:id')
    .get(async (req,res) =>
    {  
        let id = req.params.id
        let getCategory = await categoriesBL.getCategory(id)
        let getProduct = await productsBL.getAllProducts()
            let filter = getProduct.filter((product) => {
              if(product.Category.includes(getCategory.Category)) {
                return product
              }
            })
            let data = [{Category_ID : getCategory.Category_ID , Category_Name : getCategory.Category, products : filter} ]
            return res.send(data)
    })


module.exports = router