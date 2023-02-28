const Sequelize = require('sequelize');
const db = require('../config/db');


const Sociedades = db.define('sociedades', {
    id: {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    }, 
    sociedad: {
        type: Sequelize.TEXT, 
       
    }, 
 


  
})


module.exports = Sociedades;