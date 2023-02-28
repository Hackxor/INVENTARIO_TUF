const Equipos = require('../models/Equipos');
const Usuarios = require('../models/Usuarios');
const Cargos = require('../models/Cargos');
const Contratos = require('../models/Contratos');
const Contratosceco = require('../models/Contratosceco');
const Licencias = require('../models/Licencias');
const Modelos = require('../models/Modelos');
const Sedes = require('../models/Sedes');
const Sistemas = require('../models/Sistemas');
const Sociedades = require('../models/Sociedades');
const Cecos = require('../models/Cecos');
const Ciudades = require('../models/Ciudades');



exports.inicio = (req,res) =>{
    if (req.session.loggedin) {
        res.render('inicio',{
            login:true,
            name:req.session.name
        });
    }
    else{
        res.redirect('/',{
            login:false,
            name:'Debe iniciar sesion'
        });
    }
    
}
exports.general = (req,res) =>{
    if (req.session.loggedin) {
        res.render('consultarGeneral',{
            login:true,
            name:req.session.name
        });
    }
    else{
        res.redirect('/',{
            login:false,
            name:'Debe iniciar sesion'
        });
    }
}
// equipos rutas
exports.FormCrearEquipo = async(req,res) =>{
    const Cargo = await Cargos.findAll();
    const cecos = await Cecos.findAll();
    const ciudades = await Ciudades.findAll();
    const contratos = await Contratos.findAll();
    const licencias = await Licencias.findAll();
    const sistemas = await Sistemas.findAll();
    const sociedades = await Sociedades.findAll();
    const contratosceco = await Contratosceco.findAll();
    const modelos = await Modelos.findAll();
    const sedes = await Sedes.findAll();

    if (req.session.loggedin) {
        res.render('crearEquipo',{
            login:true,
            name:req.session.name,
            Cargo,cecos,ciudades,contratos,licencias,sistemas,sociedades,contratosceco,modelos,sedes
        });
    }
    else{
        res.redirect('/',{
            login:false,
            name:'Debe iniciar sesion'
        });
    }
  
}

exports.FormEditarEquipo = (req,res) =>{
    if (req.session.loggedin) {
        res.render('editarEquipo',{
            login:true,
            name:req.session.name
        });
    }
    else{
        res.redirect('/',{
            login:false,
            name:'Debe iniciar sesion'
        });
    }
}

exports.FormConsultarEquipo = (req,res) =>{
    if (req.session.loggedin) {
        res.render('consultarEquipo',{
            login:true,
            name:req.session.name
        });
    }
    else{
        res.redirect('/',{
            login:false,
            name:'Debe iniciar sesion'
        });
    }
  
}

// usuarios rutas
exports.FormCrearUsuario = async(req,res) =>{
    const equipos = await Equipos.findAll();
    const licencias = await Licencias.findAll();
    const Cargo = await Cargos.findAll();
    const cecos = await Cecos.findAll();
    const ciudades = await Ciudades.findAll();
    const contratos = await Contratos.findAll();
    const sociedades = await Sociedades.findAll();
    const sedes = await Sedes.findAll();
    const contratosceco = await Contratosceco.findAll();
    res.render('crearUsuario',{equipos,licencias,Cargo,cecos,ciudades,contratos,sociedades,sedes,contratosceco});
}

exports.FormEditarUsuario = (req,res) =>{
    res.render('editarUsuario');
}

exports.FormConsultarUsuario = (req,res) =>{
    res.render('consultarUsuario');
}

exports.reportes = (req,res) =>{
    res.render('reportes');
}

exports.reporteEquipo = async(req,res) =>{
    const equipos = await Equipos.findAll();
    
        res.render('reporteEquipo',{equipos});

   
}
exports.reporteUsuario = async(req,res) =>{
    const usuarios = await Usuarios.findAll();
    res.render('reporteUsuario',{usuarios});
}





