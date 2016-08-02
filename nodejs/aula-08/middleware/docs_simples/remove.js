'use strict';

const Pokemon = require('../models/pokemons');

Pokemon.findOne({ name : /luketamon/i }, (err, doc) => {
    doc.remove((err) => {
        console.log(err || 'Removed!');
    });
});