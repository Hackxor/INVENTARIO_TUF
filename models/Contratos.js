const Sequelize = require('sequelize');
const db = require('../config/db');


const Contratos = db.define('contratos', {
    id: {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    }, 
    contrato: {
        type: Sequelize.TEXT, 
       
    }, 
 


  
})


module.exports = Contratos;