const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../../config/db/db'); 
const validar = require('validator')
//const users = []; // Simulación de almacenamiento de usuarios en memoria

const pruebas = async(req, res) =>{
    return await res.status(200).json({
        message: 'Ruta de prueba'
    })
}

 const register = async (req, res) => {
    
    const { nombre, email, password, confirmar } = req.body;

    if (password != confirmar) {
        return res.json({
            message: 'Las contraseñas deben ser iguales'
        })
    }else{

       db("INSER INTO registro_usuarios.registro_usuarios(ID,nombre,email,password) values (id,nombre,email,password)");
    }
}

const login = async (req, res) => {

    const { email, password } = req.body;

    try {
        // Buscar el usuario en la simulación de base de datos
        const user = users.find(u => u.email === email);

        // Verificar si el usuario existe
        if (!user) {
            return res.status(404).json({ auth: false, token: null, message: 'Usuario no encontrado' });
        }

        // Verificar si la contraseña es válida
        const passwordValid = bcrypt.compareSync(contraseña, user.contraseña);
        if (!passwordValid) {
            return res.status(401).json({ auth: false, token: null, message: 'Contraseña incorrecta' });
        }

        // Generar el token de autenticación
        const token = jwt.sign({ id: user.id }, config.secretKey, { expiresIn: '1h' });

        // Enviar respuesta con el token generado
        res.status(200).json({ auth: true, token, redirect: '/entrenamiento.html' });
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ auth: false, message: 'Error interno al iniciar sesión' });
    }
}

module.exports = { 
register, 
login,
pruebas }; 