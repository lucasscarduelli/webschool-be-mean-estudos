'use strict';

const util = require('util');
const express = require('express');
const app = express();

app.get('/user/:id/:name/:email/:cpf', (req, res) => {
    const id = req.params.id;
    util.log(`O id é ${id}`);
    let params = JSON.stringify(req.params);
    if (util.isObject(req.params)) {
        console.log('É um objeto')
    }
    util.log(`Os params são ${params}`);
    res.json(req.params);
});

app.listen(3000);