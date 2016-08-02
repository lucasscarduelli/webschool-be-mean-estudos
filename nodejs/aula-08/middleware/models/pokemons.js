'use strict';

const mongoose = require('mongoose');
const util = require('util');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

mongoose.connect('mongodb://localhost/be-mean-instagram');

function pokemonHandler() {

    const schema = new Schema({
        id : ObjectId,
        name : { type : String, trin : true },
        type : { type : String, trin : true },
        attack : { type : Number },
        defense : { type : Number },
        height : { type : Number },
        description : { type : String, trin : true },
        updateAt : { type : Date, default : Date.now },
    });

    schema.pre('count', function(next) {
        util.log('pre count!');
        next();
    });

    schema.post('count', function(doc) {
        util.log('post count!');
    });
    
    schema.pre('find', function() {
        util.log('before find');
    });
    
    schema.post('find', result => {
        util.log('%j', result);
    });
    
    schema.pre('save', function(next) {
        util.log('pre save!');
        next();
    });

    schema.post('save', doc => {
        util.log('%s has been saved!', doc.name);
    });
    
    schema.post('remove', doc => {
        util.log('%s has been removed!', doc.name);
    });
    
    schema.pre('validate', function(next) {
        util.log('before validate!');
        next();
    });

    schema.post('validate', doc => {
        util.log('%s has been valid!', doc.name);
    });
    
    schema.pre('update', function() {
        this.start = Date.now();
        this.update({}, { $set : { updateAt : new Date() } });
    });
    
    schema.post('update', function() {
        console.log(this instanceof mongoose.Query); // true
        console.log('update() took ' + (Date.now() - this.start) + ' millis.');
    });
    
    return mongoose.model('Pokemon', schema);
};

module.exports = exports = pokemonHandler();