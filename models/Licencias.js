const Sequelize = require('sequelize');
const db = require('../config/db');


const Licencias = db.define('licencias', {
    id: {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    }, 
    licencia: {
        type: Sequelize.TEXT, 
       
    }, 
 


  
})


module.exports = Licencias;