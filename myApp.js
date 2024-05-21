let express = require('express');
let app = express();

app.get("/", (req, res) => {
    res.send('Hello Express')
});

app.get("/", function(req, res) {
    res.send('Hello Express')
});

console.log('Hello World')




































 module.exports = app;
