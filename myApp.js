let express = require('express');
let app = express();


// app.get('/', (req, res) => {

//     res.sendFile(__dirname + "/views/index.html");
// });

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
  });


































 module.exports = app;
