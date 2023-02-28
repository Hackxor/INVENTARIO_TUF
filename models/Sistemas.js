const Sequelize = require('sequelize');
const db = require('../config/db');


const Sistemas = db.define('sistemas', {
    id: {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    }, 
    sistema: {
        type: Sequelize.TEXT, 
       
    }, 
 


  
})


module.exports = Sistemas;