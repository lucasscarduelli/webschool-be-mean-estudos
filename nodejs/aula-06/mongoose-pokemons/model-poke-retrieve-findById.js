const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
    name : String
};

const pokemonSchema = new Schema(_schema);

const PokemonModel = mongoose.model('testepokemonslista', pokemonSchema);

const id = '57992148bd8109ac36d48e6a';

PokemonModel.findById(id, function(err, data) {
    if (err) return console.log('ERRO: ', err);
    return console.log('Buscou: ', data);
});

module.exports = pokemonSchema;

