'use strict';

const Pokemon = require('../models/pokemons-error');

const pokemon = new Pokemon({
    name : 'Luketamon - error',
    description : 'Um pokemon lendário',
    type : 'humano',
    attack : 999,
    defense : 999,
    height : 1.86
});

pokemon.save(err => {
    if (err) {
        console.log(err);
    }
})