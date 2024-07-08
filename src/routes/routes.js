const controllers = require('../controllers/controller')
const express = require('express')
const router = express.Router();

//Rutas de registro
router.post('/registro', controllers.register)
router.post('/login', controllers.login)

//rutas de 

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 711cb3355ddcfff4aeeb49d4c8f7fc90364017aa
