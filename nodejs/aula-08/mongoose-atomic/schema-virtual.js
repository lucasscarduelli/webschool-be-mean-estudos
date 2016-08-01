'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/teste');

const PersonSchema = new Schema({
    name : {
        first : String,
        last : String
    }
});

PersonSchema
.virtual('name.full')
.get(function() {
    return this.name.first + ' ' + this.name.last;
});

PersonSchema
.virtual('name.initials')
.get(function() {
    return this.name.first[0] + this.name.last[0];
});

const PersonModel = mongoose.model('Person', PersonSchema);
/*
const Lucas = new PersonModel({
    name : {
        first : 'Lucas',
        last : 'Boeing Scarduelli'
    }
});

Lucas.save(function(err, data) {
    if (err) return console.log('Erro: ', err);
    return console.log('Criou: ', data);
});
*/

PersonModel.findById('579f9dc9ce7efadf65510908', function(err, data) {
    if (err) return console.log('Erro: ', err);
    console.log('Nome completo: ', data.name.full);
    console.log('Iniciais: ', data.name.initials);
    return true;
});