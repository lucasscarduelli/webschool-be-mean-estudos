'use strict';

const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // parse application/json(ajax)
app.use(bodyParser.urlencoded({ extended : true })); // parse application/x-www-urlencoded(form)

app.post('/user', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    fs.createReadStream('./index.html').pipe(res);
});

app.listen(3000);