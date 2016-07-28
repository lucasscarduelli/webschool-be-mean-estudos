const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
    name : String
};

const pokemonSchema = new Schema(_schema);

const PokemonModel = mongoose.model('testepokemonslista', pokemonSchema);
const Luketamon = new PokemonModel({name: 'Luketamon'});

const query = {name: 'Luketamon'};

PokemonModel.find(query, function(err, data) {
    if (err) return console.log('ERRO: ', err);
    return console.log('Buscou: ', data);
});

module.exports = pokemonSchema;

