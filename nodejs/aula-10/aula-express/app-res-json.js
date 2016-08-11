'use strict';

const express = require('express');
const app = express();

app.get('/', function(req, res) {
//    res.json(null);
    res.json({name : 'Lucas'});
//    res.json({arr : [1,2,3]});
//    res.json(500, {arr : [1,2,3]});
});

app.listen(3000, function() {
    console.log('Servidor rodando em localhost:3000');
});