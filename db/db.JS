const express = require('express');
const mysql = require('mysql2');
const app = express();

// Configura los datos de conexión
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'registro_usuarios'
};

// Crea una conexión a la base de datos
const connection = mysql.createConnection(dbConfig);

// Conecta a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos MySQL establecida');
});



