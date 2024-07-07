const express = require('express');
const authcontroller=require("../controllers/controller")
const authmiddlewars=require("../middlewars/authmiddleware")
const router=express.router()

router.post("./register",authcontroller.register)

router.post("./login",authcontroller.register)
//PARA EL HASH DE CONTRASENAS INSTALAR npm install bcrypt. Y PARA TOKEN npm install bcrypt jsonwebtoken express body-parser mysql npm install bcrypt jsonwebtoken express body-parser mysql npm install bcrypt jsonwebtoken express body-parser mysql

res.status(200).send("bienvenido ${req.userId}")

module.exports=router