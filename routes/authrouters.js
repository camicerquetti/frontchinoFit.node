const express = require('express');
const app =express ();
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const PORT=3000;
//PARA EL HASH DE CONTRASENAS INSTALAR npm install bcrypt. Y PARA TOKEN npm install bcrypt jsonwebtoken express body-parser mysql npm install bcrypt jsonwebtoken express body-parser mysql npm install bcrypt jsonwebtoken express body-parser mysql

