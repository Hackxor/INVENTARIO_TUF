const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const db = require('./config/db');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');


require('dotenv').config({path : 'variables.env'})

// require('./models/Libros');

db.sync().then( () =>{
    console.log('db conectada');
}).catch((error) => console.log(error));

//Agrega el puerto
app.listen(process.env.PORT, () => {
    console.log('El servidor esta funcionando');
});




// habilitar body parser para leer datos
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// habilitar cookie parser
app.use(cookieParser());

// archivos
app.use(express.static('public'));

// habilitar ejs
app.set('view engine', 'ejs');
// ubicacion de vistas
app.set('views', path.join(__dirname, './views'));
// crear la session
app.use(session({
    secret: process.env.SECRET,
    key: process.env.KEY,
    resave : false,
    saveUninitialized : false
}))

app.use((req, res, next) => {
    next();
});

app.use('/', routes());

