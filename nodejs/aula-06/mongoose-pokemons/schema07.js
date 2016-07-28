const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
    pokemons: [{type: Schema.Types.ObjectId, ref: 'testepokemons'}]
};

const pokemonSchema = new Schema(_schema);

const data = {
    pokemons : ['57991993492c613e340f54de']
};

const Model = mongoose.model('testepokemonslista', pokemonSchema);
const pokemon = new Model(data);
pokemon.save(function(err, data) {
    if (err) return console.log('ERRO: ', err);
    console.log('Inseriu: ', data);
});

module.exports = pokemonSchema;

