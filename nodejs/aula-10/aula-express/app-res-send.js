'use strict';

const express = require('express');
const app = express();

app.get('/', function(req, res) {
//    res.send(new Buffer('bufferingggggggg'));
    res.send({ algum : 'json' });
//    res.send('<h1>algum html</h1>');
//    res.status(404).send('Não achei');
//    res.send(500, { error : 'ERRRRRROOOOO' }); // status junto com body está depreciado
//    res.send(200);
});

app.listen(3000, function() {
    console.log('Servidor rodando em localhost:3000');
});