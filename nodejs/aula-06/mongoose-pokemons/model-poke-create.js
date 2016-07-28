const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
    name : String
};

const pokemonSchema = new Schema(_schema);

const PokemonModel = mongoose.model('testepokemonslista', pokemonSchema);
const Luketamon = new PokemonModel({name: 'Luketamon'});

Luketamon.save(function(err, data) {
    if (err) return console.log('ERRO: ', err);
    console.log('Inseriu: ', data);
});

/*
PokemonModel.create({name: 'Luketamon'}, function(err, data) {
    if (err) return console.log('ERRO: ', err);
    console.log('Inseriu: ', data);
});
*/

module.exports = pokemonSchema;

