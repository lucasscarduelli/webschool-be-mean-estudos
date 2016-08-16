'use strict';

const xml = require('xml');
const express = require('express');
const app = express();
const users = require('./array-query.json');

app.get('/user/', (req, res) => {
    const type = req.get('Content-Type');
    if (/text\/xml/i.test(type)) {
        let xmlUsers = xml(users);
        res.set('Content-Type', 'application/xml');
    } else if (/application\/json/i.test(type)) {
        res.json(users);
    } else {
        res.status(400).send('Need header with json or xml');
    };
});

app.listen(3000);