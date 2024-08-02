const controllers = require('../controllers/controller');
const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

// Ruta para registrar usuarios
router.get('/pruebas', controllers.pruebas)
router.post('/auth/register', /*[
    body('nombre').notEmpty().withMessage('El nombre es requerido'),
    body('email').notEmpty().withMessage('El correo electrónico es requerido').isEmail().withMessage('Ingrese un correo electrónico válido'),
    body('contraseña').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
    body('confirmar_contraseña').custom((value, { req }) => {
        if (value !== req.body.contraseña) {
            throw new Error('Las contraseñas no coinciden');
        }
        return true;
    })
],*/ controllers.register);

// Ruta para iniciar sesión de usuarios
router.post('/auth/login', [
    body('email').notEmpty().withMessage('El correo electrónico es requerido').isEmail().withMessage('Ingrese un correo electrónico válido'),
    body('contraseña').notEmpty().withMessage('La contraseña es requerida')
], controllers.login);

module.exports = router;
