/**
 * Todas las rutas van a estar aqui
 */
const express = require('express');
const app = express();

//Ruta para el inicio de la pagina

app.use(require('./home'));
app.use(require('./formatoapa'));

module.exports = app;