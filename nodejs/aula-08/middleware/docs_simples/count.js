'use strict';

const Pokemon = require('../models/pokemons');

const query = Pokemon.where({ name : /luketamon/i });

query.count((err, doc) => {
    if (err) throw err;
    else console.log('Existem', doc);
});