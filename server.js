const express = require("express");
const app = express();
const authroutes = require("./routes/authrouters"); // Importa tus rutas de autenticación

app.use(express.json());

// Rutas principales de la aplicación
app.use("/auth", authroutes);

const PORT = process.env.PORT || 3000; //Variable de entorno || 3000
app.listen(PORT, () => {
    console.log(`Servidor Node.js ejecutándose en http://localhost:${PORT}`);
});


