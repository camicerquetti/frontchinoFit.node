/*const express = require('express');
const authcontroller=require("../controllers/controller")
const authmiddlewars=require("../middlewars/authmiddleware")
const router=express.router()

router.post("./register",authcontroller.register)

router.post("./login",authcontroller.register)
//PARA EL HASH DE CONTRASENAS INSTALAR npm install bcrypt. Y PARA TOKEN npm install bcrypt jsonwebtoken express body-parser mysql npm install bcrypt jsonwebtoken express body-parser mysql npm install bcrypt jsonwebtoken express body-parser mysql

res.status(200).send("bienvenido ${req.userId}")

module.exports=router
/*const express = require('express');
const app =express ();
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const PORT=3000;
//PARA EL HASH DE CONTRASENAS INSTALAR npm install bcrypt. Y PARA TOKEN npm install bcrypt jsonwebtoken express body-parser mysql npm install bcrypt jsonwebtoken express body-parser mysql npm install bcrypt jsonwebtoken express body-parser mysql

*/
const controllers = require('../controllers/controller')
const express = require('express')
const router = express.Router();

//Rutas de registro
router.post('/registro', controllers.register)
router.post('/login', controllers.login)

module.exports = router;
