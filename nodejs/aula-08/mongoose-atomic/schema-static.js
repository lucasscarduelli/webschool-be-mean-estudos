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

PokemonSchema.statics.search = function(name, cb) {
    return this.where('name', new RegExp(name, 'i')).exec(cb);
}

const Pokemon = mongoose.model('Pokemon', PokemonSchema);

Pokemon.search('luketamon', function(err, data) {
    if (err) return console.log('Erro: ', err);
    return data.forEach((pokemon) => console.log('Pokemon: ', pokemon));
});