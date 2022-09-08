const {DataTypes} = require('sequelize');
const db = require('../db')

let brandSchema = db.sequelize.define('brand' , {
    Brand_ID : {
        type : DataTypes.STRING,
        primaryKey : true
    } ,
    Brand : {type : DataTypes.STRING },
} , {tableName : 'brand'})

brandSchema.sync()

module.exports = brandSchema