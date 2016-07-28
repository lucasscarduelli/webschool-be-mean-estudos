const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
    name : String
};

const pokemonSchema = new Schema(_schema);

const PokemonModel = mongoose.model('testepokemonslista', pokemonSchema);
const Luketamon = new PokemonModel({name: 'Luketamon'});

const query = {name: 'Luketamon'};
const callback = function(err, data) {
    if (err) return console.log('ERRO: ', err);
    return console.log('Buscou: ', data);
};

PokemonModel.find(query).where({__v: {$gt: 2}}).exec(callback);

module.exports = pokemonSchema;

