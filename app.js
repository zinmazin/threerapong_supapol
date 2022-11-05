const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.use('/', function (req, res, next) {

    var options = {
        root: path.join(__dirname)
    };
    var fileName = 'Trip-Tool.html';
    res.sendFile(fileName, options, function (err) { 
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

app.get('/', function (req, res) {
    console.log("File Sent")
    res.send();
});
