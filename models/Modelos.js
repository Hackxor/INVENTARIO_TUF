const Sequelize = require('sequelize');
const db = require('../config/db');


const Modelos = db.define('modelos', {
    id: {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    }, 
    modelo: {
        type: Sequelize.TEXT, 
       
    }, 
 


  
})


module.exports = Modelos;