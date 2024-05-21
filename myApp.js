let express = require('express');
let app = express();


app.get('/', function(req, res) {

    res.sendFile(__dirname + "/public/index.html")
});

console.log('Hello World')




































 module.exports = app;
