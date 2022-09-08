const products = require('../searchspring.json');
const productSchema = require('../products/productsModel');

exports.addProduct = (obj) =>
{
    return new Promise((resolve) =>
    {   
        let save_Product = productSchema.build({
            Product_ID : obj.Product_ID,
            SKU : obj.SKU,
            Name : obj.Name,
            Brand : obj.Brand,
            Category : obj.Category,
            Price : obj.Price
        })
        save_Product.save(resolve('data posted'))  
    })
}

exports.insertAllProducts = () => {
    let dataToReturn = []
    products.Product.forEach(element => {
        let categories = element.Category.replace('|' , ">")?.replace('|' , ">")
        let categories_Names = categories.split('>')
        let arrayWithAllCategory = []
        for (let i = 0; i < categories_Names.length; i++) {
                arrayWithAllCategory.push(categories_Names[i]);
        }
        removeDuplicate = [...new Set(arrayWithAllCategory)];
        let data = {Product_ID : element.Product_ID ,
                    SKU : element.SKU ,
                    Name : element.Name ,
                    Price : element.Price ,
                    Category : removeDuplicate ,
                    Brand : element.Brand}
        this.addProduct(data)
        dataToReturn.push(data)
    });
    return dataToReturn;
}

exports.getAllProducts = () => {
    return new Promise ((resolve) => {
        productSchema.findAll().then((data) => {
            if(data.length === 0) {
                let dataToReturn = this.insertAllProducts()
                resolve(dataToReturn)
            }
            else {
                resolve(data)
            }
        })

})}

exports.getProduct = (id) => {
    return new Promise ((resolve , reject) => {
        productSchema.findAll().then((data) => {
            let dataById = data.find(product => product.Product_ID === id).get()
            if(!dataById) {
                reject('No Data')
            } else {
                resolve(dataById)
            }
        })
        
})}


