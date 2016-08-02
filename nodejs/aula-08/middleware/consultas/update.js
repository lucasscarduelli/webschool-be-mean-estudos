'use strict';

const Pokemon = require('../models/pokemons');

const query = Pokemon.where({ attack : 999 });

query.update({ name : 'Luketamon' }).exec();