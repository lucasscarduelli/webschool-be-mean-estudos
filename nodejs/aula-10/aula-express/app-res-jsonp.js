'use strict';

// Gambiarra que não usa CORS

const express = require('express');
const app = express();

app.get('/', function(req, res) {
//    res.jsonp(null);
    res.jsonp({name : 'Lucas'});
//    res.jsonp({arr : [1,2,3]});
//    res.jsonp(500, {arr : [1,2,3]});
});

app.listen(3000, function() {
    console.log('Servidor rodando em localhost:3000');
});