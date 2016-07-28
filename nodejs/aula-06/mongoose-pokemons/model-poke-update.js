const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
    name : String,
    attack : Number
};

const pokemonSchema = new Schema(_schema);

const PokemonModel = mongoose.model('testepokemonslista', pokemonSchema);

const query = {name: /luketamon/i};
const mod = {attack: 100};

const options = {upsert: true, multi: true}

PokemonModel.update(query, mod, options, function(err, data) {
    if (err) return console.log('ERRO: ', err);
    return console.log('Alterou: ', data);
});

module.exports = pokemonSchema;

