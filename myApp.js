let express = require('express');
let app = express();

let path = __dirname + './views/index.html'

app.get(path, (req, res) => {
    

    res.send(path)
});

console.log('Hello World')




































 module.exports = app;
