'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pokemon');
const Pokemon = require('./models/pokemon');

Pokemon.find({}, function(err, pokemon){
    if (!err) {
        console.log(pokemon);
    } else {
        throw err;
    }
});