const Sequelize = require('sequelize');
const db = require('../config/db');


const Cargos = db.define('cargos', {
    id: {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    }, 
    cargo: {
        type: Sequelize.TEXT, 
       
    }, 
 


  
})


module.exports = Cargos;