const Equipos = require('../models/Equipos');
const Usuarios = require('../models/Usuarios');
const { Op, where } = require("sequelize");
// crear nuevo equipo
exports.crearEquipo = async(req,res) =>{
    const equipo = req.body;
    try {
        await Equipos.create(equipo);
        res.redirect('/inicio');
    } catch (error) {
        console.log(error);
    }
    
    
}

// consultar equipo
exports.consultarEquipo = async(req,res) =>{
    const {serial , placa} = req.body;

    const equipos = await Equipos.findAll({ where : {
        [Op.or]: [
            { serial: serial },
            { id_placa: placa }
          ]
    } });
    const usuarios = await Usuarios.findAll({where : {equipo_placa: placa}});
    res.render('consultarEquipo2', {equipos,usuarios});
}

// editar equipo
exports.editarEquipoBusqueda = async(req,res) =>{
    const {serial , placa} = req.body;

    const equipos = await Equipos.findAll({ where : {
        [Op.or]: [
            { serial: serial },
            { id_placa: placa }
          ]
    } });
    res.render('editarEquipo2', {equipos});
}
exports.editarEquipo = async(req,res) =>{
    const {tipo , marca, modelo, serial , placa, estado, plataforma, sistema, monitor1, monitor2, ag_alista, ag_retira, mouse,diadema,video,refrigerante,monitor,disco,wacom,tablet,adicionales,documentos} = req.body;
     await Equipos.update({ serial : serial, tipo:tipo, marca:marca, placa:placa, estado:estado, plataforma:plataforma, sistema:sistema, monitor1:monitor1, monitor2:monitor2, ag_alista:ag_alista, ag_retira:ag_retira,
    mouse:mouse, diadema:diadema, video:video,refrigerante:refrigerante,monitor:monitor,disco:disco,wacom:wacom,tablet:tablet,adicionales:adicionales,documentos:documentos }, {where : {modelo : modelo}});

    res.redirect('/inicio');
}

// relacionando
exports.consultarGeEquipo = async(req,res) =>{
    const {serial , placa} = req.body;

    const equipos = await Equipos.findAll({ where : {
        [Op.or]: [
            { serial: serial },
            { id_placa: placa }
          ]
    } });
    const usuarios = await Usuarios.findAll({where : {equipo_placa: placa}});
    res.render('consultarGeneral2', {equipos,usuarios});
}
// filtrar
exports.filtrar = async(req,res) =>{
    const {serial , modelo, plataforma, placa} = req.body;

    const equipos = await Equipos.findAll({where:{
        [Op.or]: [
            { serial: serial },
            { modelo: modelo },
            { id_placa: placa },
            {plataforma: plataforma}
          ]
    }});

    const usuarios = await Usuarios.findAll({where:{equipo_placa : placa}});
    res.render('reporteEquipo2', {equipos,usuarios});
}

