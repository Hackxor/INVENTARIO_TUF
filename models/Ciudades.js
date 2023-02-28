const Sequelize = require('sequelize');
const db = require('../config/db');


const Ciudades = db.define('ciudades', {
    id: {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    }, 
    ciudad: {
        type: Sequelize.TEXT, 
       
    }, 
 


  
})


module.exports = Ciudades;