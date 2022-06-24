const Sequelize = require("sequelize");

// On créé une instance de Sequelize
 const sequelize = new Sequelize("sequelize_ws", "root", "azerty", {
    host: "localhost",
    dialect: "mysql"
 });
 

 module.exports = sequelize;