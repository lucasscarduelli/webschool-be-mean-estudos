'use strict';

const Pokemon = require('../models/pokemons');

const pokemon = new Pokemon({
    name : 'Luketamon',
    description : 'Um pokemon lendário',
    type : 'humano',
    attack : 999,
    defense : 999,
    height : 1.86
});

pokemon.validate(err => {
    if (err) {
        console.log(err);
    }
})