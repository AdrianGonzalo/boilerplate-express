let express = require('express');
let app = express();
let path = __dirname + '/views/index.html'

app.get('/', (req, res) => {

    res.sendFile(path)
});

console.log('Hello World')




































 module.exports = app;
