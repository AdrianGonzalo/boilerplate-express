let express = require('express');
let app = express();

app.get("/", (req, res) => {
    let path = __dirname + './views/index.html'

    res.send(path)
});

console.log('Hello World')




































 module.exports = app;
