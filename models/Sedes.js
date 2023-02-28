const Sequelize = require('sequelize');
const db = require('../config/db');


const Sedes = db.define('sedes', {
    id: {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    }, 
    sede: {
        type: Sequelize.TEXT, 
       
    }, 
 


  
})


module.exports = Sedes;