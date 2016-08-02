'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dbURI = 'mongodb://localhost/be-mean-instagram';

mongoose.connect(dbURI);

const _schema = {
    name : String,
    description : String,
    type : String,
    attack : Number,
    defense : Number,
    height : Number
};

const PokemonSchema = new Schema(_schema);

PokemonSchema.methods.findSimilarType = function(cb) {
    return this.model('Pokemon').find({ type : this.type }, cb);
};

const Pokemon = mongoose.model('Pokemon', PokemonSchema);
const pokemon = new Pokemon({ name : 'Teste', type : 'terra'});

pokemon.findSimilarType(function(err, data) {
    if (err) return console.log('Erro: ', err);
    return data.forEach((pokemon) => console.log('Pokemon: ', pokemon));
});

pokemon.findSimilarType()
.where('defense').gt(0)
.limit(4)
.exec(function(err, data) {
    if (err) return console.log('Erro: ', err);
    return data.forEach((pokemon) => console.log('Pokemon: ', pokemon));
});