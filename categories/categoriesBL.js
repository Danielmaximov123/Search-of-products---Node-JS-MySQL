const products = require('../searchspring.json');
const categoriesSchema = require('./categoriesModel');

exports.addCategory = (obj) =>
{
    return new Promise((resolve) =>
    {   
        let save_Category = categoriesSchema.build({
            Category_ID : obj.ID,
            Category : obj.Category,
        })
        save_Category.save(resolve('data posted'))  
    })
}

exports.insertAllCategories = () => {
    let dataToReturn = []
    let arrayWithAllCategory = []
    products.Product.forEach((element) => {
        let categories = element.Category.replace('|' , ">").replace('|' , ">")
        let categories_Names = categories.split('>')
        dataToReturn.push(categories_Names)
    });
    for (let i = 0; i < dataToReturn.length; i++) {
        for (let j = 0; j < dataToReturn[i].length; j++) {
            arrayWithAllCategory.push(dataToReturn[i][j]);
        }
    }
    removeDuplicate = [...new Set(arrayWithAllCategory)];
    let category = removeDuplicate.map((item , index) => {
        data = {ID : index.toString() , Category : item}
        this.addCategory(data)
        return data
    })
    return category;
}

exports.getAllCategories = () => {
    return new Promise ((resolve) => {
        categoriesSchema.findAll().then((data) => {
            if(data.length === 0) {
                let dataToReturn = this.insertAllCategories()
                resolve(dataToReturn)
            }
            else {
                resolve(data)
            }
        })

})}

exports.getCategory = (id) => {
    return new Promise ((resolve , reject) => {
        categoriesSchema.findAll().then((data) => {
            let dataById = data.find(category => category.Category_ID === id)?.get()
            if(!dataById) {
                reject('No Data')
            } else {
                resolve(dataById)
            }
        })
        
})}


