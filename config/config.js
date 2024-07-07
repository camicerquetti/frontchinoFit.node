require('dotenv').config()

module.exports = {
    secretKey: process.env.SECRET_KEY,
    tokenExpiresIn: process.env.EXPIRES,
    port: process.env.PORT,
    mysql:{
        host: process.env.HOST || 'localhost',
        user: process.env.USER || 'root',
        password: process.env.PASSWORD || '',
        database: process.env.DATABASE
      }
      
    }