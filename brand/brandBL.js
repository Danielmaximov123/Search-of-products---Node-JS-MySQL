const products = require('../searchspring.json');
const brandSchema = require('./brandModel');

exports.addBrand = (obj) =>
{
    return new Promise((resolve) =>
    {   
        
        let save_Brand = brandSchema.build({
            Brand_ID : obj.Brand_ID,
            Brand : obj.Brand,
        })
        save_Brand.save(resolve('data posted'))  
    })
}

exports.insertAllBrands = () => {
    let dataToReturn = []
    products.Product.forEach((element) => {
        let data = element.Brand
        dataToReturn.push(data)
    })
    removeDuplicate = [...new Set(dataToReturn)];
    let brands = removeDuplicate.map((item , index) => {
        this.addBrand({Brand_ID : index.toString() , Brand : item})
        return {Brand_ID : index.toString() , Brand : item}
    })
    return brands;
}

exports.getAllBrands = () => {
    return new Promise ((resolve) => {
        brandSchema.findAll().then((data) => {
            if(data.length === 0) {
                let dataToReturn = this.insertAllBrands()
                resolve(dataToReturn)
            }
            else {
                resolve(data)
            }
        })

})}

exports.getBrand = (id) => {
    return new Promise ((resolve , reject) => {
        brandSchema.findAll().then((data) => {
            let dataById = data.find(brand => brand.Brand_ID === id).get()
            if(!dataById) {
                reject('No Data')
            } else {
                resolve(dataById)
            }
        })  
})}


