'use strict';

const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.set({ 'Auth' : 'Has48asd45asd9264asd' });
    res.set({ 'Content-Type' : 'application/json' });
    res.send('hello world!');
});

app.listen(3000, function() {
    console.log('Servidor rodando em localhost:3000');
});