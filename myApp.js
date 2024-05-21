// let express = require('express');
// let app = express();


// app.get('/', (req, res) => {

//     res.sendFile(__dirname + "/views/index.html");
// });

const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Configuración de la ruta para enviar el archivo index.html
app.get('/', (req, res) => {
  const absolutePath = path.join(__dirname, 'views', 'index.html');
  res.sendFile(absolutePath);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});




































 module.exports = app;
