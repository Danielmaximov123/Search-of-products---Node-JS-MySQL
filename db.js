const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('learndb' , 'root' , 'Danny1995!@' ,{
    dialect : 'mysql'
})

sequelize.authenticate().then(() => {
    console.log('MySql in Connected now');
}).catch((err) => {
    console.log(err.message);
})

module.exports = {sequelize}