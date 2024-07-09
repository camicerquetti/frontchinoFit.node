const server = require('./config/server/server.js');
const connection = require('./config/db/db.js');



server();
connection();