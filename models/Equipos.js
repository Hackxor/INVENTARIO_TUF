const Sequelize = require('sequelize');
const db = require('../config/db');
const Usuarios = require('../models/Usuarios');


const Equipos = db.define('Equipos', {
    id_placa: {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    }, 
    tipo: {
        type: Sequelize.TEXT, 
       
    }, 
    marca: {
        type: Sequelize.TEXT,
      
    },
    modelo: {
        type: Sequelize.TEXT,
    },
    serial: {
        type: Sequelize.TEXT,
    },
    estado: {
        type: Sequelize.TEXT,
    },
    plataforma: {
        type: Sequelize.TEXT,
    },
    sistema: {
        type: Sequelize.TEXT,
    },
    monitor1: {
        type: Sequelize.TEXT,
    },
    monitor2: {
        type: Sequelize.TEXT,
    },

    ag_alista: {
        type: Sequelize.TEXT,
    },

    ag_retira: {
        type: Sequelize.TEXT,
    },
    mouse: {
        type: Sequelize.TEXT, 
       
    }, 
    diadema: {
        type: Sequelize.TEXT,
      
    },
    video: {
        type: Sequelize.TEXT,
    },
    refrigerante: {
        type: Sequelize.TEXT,
    },
    monitor: {
        type: Sequelize.TEXT,
    },
    disco: {
        type: Sequelize.TEXT,
    },
    wacom: {
        type: Sequelize.TEXT,
    },
    tablet: {
        type: Sequelize.TEXT,
    },
    adicionales: {
        type: Sequelize.TEXT,
    },
    documentos: {
        type: Sequelize.TEXT,
    },
 

  
})


module.exports = Equipos;