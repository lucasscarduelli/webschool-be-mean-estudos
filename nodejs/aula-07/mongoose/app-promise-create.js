'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pokemon');
const Pokemon = require('./models/pokemon');

const pokemon = {
    name : 'Luketamon',
    type : 'Fire',
    attack : 999,
    defence : 999,
    height : 1.86,
    description : 'goalkepper'
};

Pokemon.create(pokemon).then(success, error);

function success(data) {
    console.log(data);
};

function error(err) {
    console.error(err);
}