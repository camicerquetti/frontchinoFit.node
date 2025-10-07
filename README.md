# ChinoFit Backend

## Descripción

Este es el backend de la aplicación ChinoFit, desarrollado con Node.js para gestionar la lógica del servidor, las APIs y la comunicación con la base de datos MySQL.

El backend se encarga de:

- Gestionar usuarios y autenticación.
- Procesar la generación automática de rutinas según el objetivo del usuario.
- Controlar el sistema de pagos y vencimientos de las cuentas.
- Proveer endpoints para la calculadora de calorías.
- Manejar las relaciones con la base de datos MySQL para almacenar y recuperar datos.

## Tecnologías utilizadas

- Node.js
- Express.js
- MySQL
- Sequelize (ORM para MySQL) *(o especifica si usas otro ORM o solo mysql driver)*
- JWT para autenticación (si aplica)
- Dotenv para gestión de variables de entorno

## Instalación

1. Clonar el repositorio:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd nombre-del-backend
