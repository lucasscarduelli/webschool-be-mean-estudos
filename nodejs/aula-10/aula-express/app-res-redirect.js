'use strict';

// Gambiarra que não usa CORS

const express = require('express');
const app = express();

app.get('/', function(req, res) {
//    res.redirect('https://www.google.com');
    res.redirect('login');
//    res.redirect(301, 'login');
});

app.listen(3000, function() {
    console.log('Servidor rodando em localhost:3000');
});