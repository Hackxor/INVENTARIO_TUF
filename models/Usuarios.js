const Sequelize = require('sequelize');
const db = require('../config/db');
const Equipos = require('./Equipos');


const Usuarios = db.define('usuarios', {
    id: {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    }, 
    nombre_usuario: {
        type: Sequelize.TEXT, 
       
    }, 
    apellidos_usuario: {
        type: Sequelize.TEXT,
      
    },
    usuario_red: {
        type: Sequelize.TEXT,
    },
    correo_usuario: {
        type: Sequelize.TEXT,
       
    },
    telefono: {
        type: Sequelize.TEXT,
    },
    jefe: {
        type: Sequelize.TEXT,
    },
    ingreso: {
        type: Sequelize.TEXT,
       
    },
    retiro: {
        type: Sequelize.TEXT,
    },
    puesto: {
        type: Sequelize.TEXT,
    },
    host: {
        type: Sequelize.TEXT,
    },
    licencia: {
        type: Sequelize.TEXT,
    },
    equipo_placa: {
        type : Sequelize.INTEGER,
    },

    cargo: {
        type: Sequelize.TEXT, 
       
    }, 
    ciudad: {
        type: Sequelize.TEXT,
      
    },
    sociedad: {
        type: Sequelize.TEXT,
    },
    ceco: {
        type: Sequelize.TEXT,
    },
    sede: {
        type: Sequelize.TEXT,
    },
    ubicacion: {
        type: Sequelize.TEXT,
    },
    contrato: {
        type: Sequelize.TEXT,
    },
    nombre_ceco: {
        type: Sequelize.TEXT,
    },
    carta: {
        type: Sequelize.TEXT,
    },
    comodato: {
        type: Sequelize.TEXT,
    },


  
})


module.exports = Usuarios;