const express = require('express');
const authcontroller = require("../controllers/controller");
const authmiddlewares = require("../middlewares/authmiddleware");
const router = express.Router(); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const path = require('path');
const users = [];
// POST /auth/register
router.post('/register', (req, res) => {
    const { nombre, email, contraseña, confirmar_contraseña } = req.body;

    // Validar que las contraseñas coincidan
    if (contraseña !== confirmar_contraseña) {
        return res.status(400).json({ error: 'Las contraseñas no coinciden' });
    }

    // Validar si el usuario ya está registrado
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ error: 'El usuario ya está registrado' });
    }

    // Hash de la contraseña
    bcrypt.hash(contraseña, 10, (err, hashedPassword) => {
        if (err) {
            return res.status(500).json({ error: 'Error interno del servidor' });
        }

        // Guardar el usuario (simulado, en un entorno real se guardaría en una base de datos)
        const newUser = { nombre, email, contraseña: hashedPassword };
        users.push(newUser);

        // Generar token JWT (opcional)
        const token = jwt.sign({ email: newUser.email }, 'claveSecreta', { expiresIn: '1h' });

        // Enviar respuesta
        res.status(201).json({ message: 'Usuario registrado exitosamente', token });
    });
});
// JWT Secret (clave secreta para firmar el token)
const JWT_SECRET = 'claveSecreta';

// Middleware para verificar token JWT
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Token no proporcionado' });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Token inválido' });
        }
        req.userId = decoded.userId;
        next();
    });
};

// POST /auth/login
router.post('/login', (req, res) => {
    const { email, contraseña } = req.body;

    // Buscar usuario en la lista simulada
    const user = users.find(user => user.email === email);

    // Validar si el usuario existe
    if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Comparar contraseñas
    bcrypt.compare(contraseña, user.contraseña, (err, result) => {
        if (err || !result) {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }

        // Generar token JWT (opcional)
        const token = jwt.sign({ email: user.email }, 'claveSecreta', { expiresIn: '1h' });

        // Enviar respuesta con el token (opcional)
        res.status(200).json({ message: 'Inicio de sesión exitoso', token,redirect: '/entrenamiento.php'});
    });
});

// Middleware para proteger rutas que requieren autenticación
router.get("/protected", authmiddlewares.authenticateToken, (req, res) => {
    res.status(200).send(`Bienvenido ${req.userId}`);
});
// Ruta para manejar el cálculo del IGC
app.post('/calcularIGC', (req, res) => {
    const { altura, peso, edad, sexo } = req.body;

    // Calcular el IGC (IMC para este ejemplo)
    const imc = peso / (altura * altura);

    // Enviar el resultado como JSON
    res.json({ imc: imc.toFixed(2) });
});
module.exports = router;
