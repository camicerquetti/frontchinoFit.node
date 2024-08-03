const express = require("express");
const app = express();
const config = require('../config') // Importa tus rutas de autenticación
const cors = require('cors')

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.set('view engine','ejs')

const rutas = require('../../src/routes/users')

app.use('/api', rutas)

app.get('/', (req, res)=>{
    res.render('pages/index')
})
app.get('/registrate', (req,res)=>{
    res.render('pages/registrate')
})
app.get('/usuario', (req,res)=>{
    res.render('pages/usuario')
    })

app.get('*', (req,res)=>{
    res.render('pages/404')
})

// Rutas principales de la aplicación
//app.use("/auth", authroutes);

const PORT = config.PORT || 4002 //Variable de entorno || 3000
        
const server = ()=>{
    try {
        app.listen(PORT, () => {
        console.log()
        console.log(`Servidor Node.js ejecutándose en http://localhost:${PORT}`.bold.bgBrightGreen);
});
        
    } catch (error) {
        throw new Error('No se pudo conectar al servidor '.bold.bgBrightRed)
    }
}

module.exports = server;