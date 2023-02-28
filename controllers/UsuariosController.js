const Usuarios = require('../models/Usuarios');
const Admins = require('../models/Admins');
const { Op, where } = require("sequelize");

exports.index = (req,res) =>{
    res.render('login');
}

// crear nuevo usuario
exports.crearUsuario = async(req,res) =>{
    const usuario = req.body;
    try {
        await Usuarios.create(usuario);
        res.redirect('/inicio');
    } catch (error) {
        console.log(error);
    }
    
    
}

// consultar usuario
exports.consultarUsuario = async(req,res) =>{
    const {jefe , usuario_red} = req.body;

    const usuarios = await Usuarios.findAll({ where : {
        [Op.or]: [
            { jefe: jefe },
            { usuario_red: usuario_red }
          ]
    }
    });
    res.render('consultarUsuario2', {usuarios});
}

// editar usuario
exports.editarUsuarioBusqueda = async(req,res) =>{
    const {jefe , usuario_red} = req.body;

    
    const usuarios = await Usuarios.findAll({ where : {
        [Op.or]: [
            { jefe: jefe },
            { usuario_red: usuario_red }
          ]
    }
    });
    res.render('editarUsuario2', {usuarios});
}
exports.editarUsuario = async(req,res) =>{
    const {id,cedula ,nombre_usuario,apellidos_usuario,usuario_red,correo_usuario,telefono,jefe,ingreso,retiro,puesto,host,licencia,cargo,ciudad,sociedad,ceco,sede,ubicacion,contrato,nombre_ceco,carta,comodato} = req.body;
     await Usuarios.update({cedula:cedula,nombre_usuario:nombre_usuario,apellidos_usuario:apellidos_usuario,usuario_red:usuario_red,correo_usuario:correo_usuario,telefono:telefono,jefe:jefe,ingreso:ingreso,retiro:retiro,puesto:puesto,host:host,licencia:licencia,
    cargo:cargo,ciudad:ciudad,sociedad:sociedad,ceco:ceco,sede:sede,ubicacion:ubicacion,contrato:contrato,nombre_ceco:nombre_ceco,carta:carta,comodato:comodato }, {where : {telefono : telefono}});

    res.redirect('/inicio');
}


exports.LoginAdmin = async(req,res) =>{
    const {correo , contraseña } = req.body;
    const admins =   await Admins.findOne({where: {correo:correo,contraseña:contraseña}});
    if (admins) {
      if (admins.contraseña === contraseña) {
        req.session.loggedin = true;
        res.redirect('/inicio');
      }
      else{
        alert('Correo/Contraseña incorrectos...');
      }
       
    }
  
    
    
}


// filtrar busqueda
exports.filtrar = async(req,res) =>{
    const {correo, ingreso, puesto} = req.body;

    const usuarios = await Usuarios.findAll({ where : {
        [Op.or]: [
            { correo_usuario: correo },
            { ingreso: ingreso },
            { puesto: puesto },
          ]
    }
    });
    res.render('reporteUsuario2', {usuarios});
}




exports.Logout = (req,res) =>{
req.session.destroy(()=>{
    res.redirect('/');
})
}

