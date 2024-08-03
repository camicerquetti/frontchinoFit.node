const mysql = require('mysql2');
const config = require('../config');
const colors = require('colors')

// Crea una conexión a la base de datos

const  connection = async()=>{
  let dbConfig = config.mysql
  try {
      await mysql.createConnection(dbConfig);
      console.log()
      console.log('Conexión establecida con base de datos'.bold.bgBrightGreen)
  } catch (error) {
      throw new Error('No se pudo establecer conexión con base de datos '.bold.bgBrightRed)
  }
}

module.exports = connection;


