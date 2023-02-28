var express = require('express');
var router = express.Router();
const UsuariosController = require('../controllers/UsuariosController');
const InicioController = require('../controllers/InicioController');
const EquiposController = require('../controllers/EquiposController');

/* GET home page. */
module.exports = function () {
  // rutas
  router.get('/', UsuariosController.index );
  router.get('/inicio', InicioController.inicio );
  router.get('/consultas', InicioController.general );
  router.get('/reportes', InicioController.reportes );
  router.get('/reporteEquipo', InicioController.reporteEquipo );
  router.get('/reporteUsuario', InicioController.reporteUsuario );
  router.get('/crearEquipo', InicioController.FormCrearEquipo );
  router.get('/editarEquipo', InicioController.FormEditarEquipo );
  router.get('/consultarEquipo', InicioController.FormConsultarEquipo );

  router.get('/crearUsuario', InicioController.FormCrearUsuario );
  router.get('/editarUsuario', InicioController.FormEditarUsuario );
  router.get('/consultarUsuario', InicioController.FormConsultarUsuario );
  router.get('/logout', UsuariosController.Logout );




  // operaciones
  router.post('/crearEq', EquiposController.crearEquipo );
  router.post('/consultarEq', EquiposController.consultarEquipo );
  router.post('/editarEqBusqueda', EquiposController.editarEquipoBusqueda );
  router.post('/editarEq', EquiposController.editarEquipo );

  router.post('/crearUs', UsuariosController.crearUsuario );
  router.post('/consultarUs', UsuariosController.consultarUsuario );
  router.post('/editarUsBusqueda', UsuariosController.editarUsuarioBusqueda );
  router.post('/editarUs', UsuariosController.editarUsuario );

  // relaciones
  router.post('/consultarGe', EquiposController.consultarGeEquipo );
// Login
  router.post('/loginOn', UsuariosController.LoginAdmin );

  // Filtrar reportes
  router.post('/filtrarEq', EquiposController.filtrar );
  router.post('/filtrarUs', UsuariosController.filtrar );

  return router;
}



