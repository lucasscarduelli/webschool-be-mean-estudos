'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pokemon');
const Pokemon = require('./models/pokemon');

let promise = Pokemon.find({}).exec();
promise.then(success, error);

function success(data) {
    console.log(data);
};

function error(err) {
    console.error(err);
}