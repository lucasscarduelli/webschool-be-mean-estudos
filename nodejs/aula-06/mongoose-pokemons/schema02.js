const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
    name: String,
    description: String,
    type: String,
    attack: Number,
    defense: Number,
    height: Number,
    created_at: { type: Date, default: Date.now }
};

const pokemonSchema = new Schema(_schema);

const data = {name: 'Luketamon'};

var Model = mongoose.model('testepokemon', pokemonSchema);
var pokemon = new Model(data);
pokemon.save(function(err, data) {
    if (err) return console.log('ERRO: ', err);
    console.log('Inseriu: ', data);
});

module.exports = pokemonSchema;

