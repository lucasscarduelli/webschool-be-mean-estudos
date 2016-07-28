const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
    name: String
};

const pokemonSchema = new Schema(_schema);

const data = {name: {teste: 'Luketamon'}};

var Model = mongoose.model('testepokemon', pokemonSchema);
var pokemon = new Model(data);
pokemon.save(function(err, data) {
    if (err) return console.log('ERRO: ', err);
    console.log('Inseriu: ', data);
});

module.exports = pokemonSchema;

