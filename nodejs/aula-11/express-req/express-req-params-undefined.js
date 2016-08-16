'use strict';

const util = require('util');
const express = require('express');
const app = express();

app.get('/user/:email', (req, res) => {
    const id = req.params.id; // é undefined
    util.log(`O id é ${id}`);
    let params = util.inspect(req.params);
    util.log(`Os params são ${params}`);
    res.send(`user name ${name}`);
});

app.listen(3000);