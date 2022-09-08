const {DataTypes} = require('sequelize');
const db = require('../db')

let categoriesSchema = db.sequelize.define('categories' , {
    Category_ID : {
        type : DataTypes.STRING,
        primaryKey : true
    } ,
    Category : {type : DataTypes.STRING},
} , {tableName : 'categories'})

categoriesSchema.sync()

module.exports = categoriesSchema