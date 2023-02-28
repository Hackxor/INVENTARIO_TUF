const Sequelize = require('sequelize');
const db = require('../config/db');


const Contratosceco = db.define('contratosceco', {
    id: {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    }, 
    contrato: {
        type: Sequelize.TEXT, 
       
    }, 
 


  
})


module.exports = Contratosceco;