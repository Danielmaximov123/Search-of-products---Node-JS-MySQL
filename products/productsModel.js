const {DataTypes} = require('sequelize');
const db = require('../db')

let productSchema = db.sequelize.define('products' , {
    Product_ID : {
        type : DataTypes.STRING,
        primaryKey : true
    } ,
    SKU : {
        type : DataTypes.STRING 
    },
    Name : {type : DataTypes.STRING},
    Brand : {type : DataTypes.STRING},
    Category : {type : DataTypes.JSON},
    Price : {type : DataTypes.STRING}
} , {tableName : 'products'})

productSchema.sync()

module.exports = productSchema