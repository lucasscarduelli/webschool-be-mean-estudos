'use strict';

const path = require('path');
const express = require('express');
const app = express();
const SendFiles = require('./modules/files/SendFiles');

app.get('/file/:name', function(req, res, next) {
    return SendFiles(req, res);
});

app.listen(3000, function() {
    console.log('Servidor rodando em localhost:3000');
});