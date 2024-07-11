const express = require("express");
const app = express();
const config = require('../config')
const router= require('../../src/routes/routes'); // Importa tus rutas de autenticación
const cors = require('cors')
const path = require('path');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.set('view engine','ejs')


app.get('/', (req, res)=>{
    res.render('index')
})
app.get('/registrate', (req,res)=>{
    res.render('registrate')
})
app.get('/usuario', (req,res)=>{
    res.render('usuario')
    })
app.get('*', (req,res)=>{
    res.render('404')
})

app.use
app.use('/api/v1', router)

// Rutas principales de la aplicación
//app.use("/auth", authroutes);

const PORT = config.port || 3002 //Variable de entorno || 3000
        

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