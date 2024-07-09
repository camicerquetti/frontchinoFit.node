const controllers = require('../controllers/controller')
const express = require('express')
const router = express.Router();

//Rutas de registro
router.post('/registro', controllers.register)
router.post('/login', controllers.login)

module.exports=router;

