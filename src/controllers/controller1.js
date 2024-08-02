const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../../config/db/db'); 
const validar = require('validator')
//const users = []; // Simulación de almacenamiento de usuarios en memoria

exports.register = async (req, res) => {
    const { nombre, email, contraseña, confirmar_contraseña } = req.body;

    // Validación de campos usando express-validator
   // const errors = validationResult(req);
    if (validar.isEmpty()) {
        return res.status(400).json({ messager:"Todos los campos son obligatorios" });
    }
// Función para validar y sanitizar el email
if(!validar.isEmpty(email)){
    return res.status(400).json( {massager:'El correo electrónico es requerido'});

}
    // Validar si las contraseñas coinciden
    if (contraseña !== confirmar_contraseña) {
        return res.status(400).json({ message: 'Las contraseñas no coinciden' });
    }
    // Validar si es email 
    if (!validar.isEmail(email)){
        return res.status(400).json({ message: 'El email no es válido' });
    }
    // Encriptar la contraseña
    const hashedPassword = bcrypt.hashSync(contraseña, 8);

    // Crear un nuevo usuario (en una aplicación real, aquí guardarías el usuario en la base de datos)
    const newUser = { id: users.length + 1, nombre, email, contraseña: hashedPassword };
   db.query("INSER INTO registro_usuarios.registro_usuarios(ID,nombre,email,contraseña) values(id,nombre,email,hashedpassword)");

(err,results)=> {
    if(err){
        console.log(err);
    return res.status(500).json({massager:"error al crear el usuario"});
}  
    
    return res.status(201).json({massager:"usuario creado correctamente"});
    };
   
        // Guardar usuario en la base de datos (aquí deberías usar tu función de conexión a la base de datos)
        // Ajusta la consulta según tu estructura de base de datos y método de conexión


        // Generar el token de autenticación
    try {
        const token = jwt.sign({ id: newUser.id }, config.secretKey, { expiresIn: '1h' });

        // Enviar respuesta con el token generado
        res.status(201).json({ auth: true, token });
    } 
    catch (error) {
        
        console.error('Error al registrar el usuario:', error);
        res.status(500).json({ auth: false, message: 'Error interno al registrar el usuario' });
    }
    

}
    exports.login = async (req, res) => {




    const { email, contraseña } = req.body;

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
