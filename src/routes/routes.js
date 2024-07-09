const controllers = require('../controllers/controller')
const express = require('express')
const router = express.Router();
const { body } = require('express-validator');

router.post('/auth/register', [
    body('username').notEmpty().withMessage('El nombre de usuario es requerido'),
    body('email').notEmpty().withMessage('El correo electrónico es requerido').isEmail().withMessage('Ingrese un correo electrónico válido'),
    body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
    body('confirmar_contraseña').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Las contraseñas no coinciden');
        }
        return true;
    })
], controllers.register);

router.post('/auth/login', [
    body('username').notEmpty().withMessage('El nombre de usuario es requerido'),
    body('password').notEmpty().withMessage('La contraseña es requerida')
], controllers.login);

module.exports = router;
