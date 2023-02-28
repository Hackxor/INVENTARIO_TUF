const Sequelize = require('sequelize');
const db = require('../config/db');


const Cecos = db.define('cecos', {
    id: {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    }, 
    ceco: {
        type: Sequelize.TEXT, 
       
    }, 
 


  
})


module.exports = Cecos;