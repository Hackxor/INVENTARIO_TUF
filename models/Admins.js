const { STRING, TEXT } = require('sequelize');
const Sequelize = require('sequelize');
const db = require('../config/db');



const Admins = db.define('admins', {
    id: {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    }, 
    correo: {
        type:STRING(50), 
    }, 
    contraseña: {
        type:STRING(50), 
    }, 
    createdAt: {
        type:TEXT, 
    }, 
    updatedAt: {
        type:TEXT, 
    }, 
  
  


  
})


module.exports = Admins;