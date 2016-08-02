'use strict';

const mongoose = require('mongoose');
const util = require('util');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const log = require('./log');

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

    schema.pre('save', true, function(next, done) {
        util.log('before save!');
        log('model',`${this.name} ${this._id} has been saved`, done);
        next();
    });

    schema.post('save', doc => {
        util.log('%s has been saved!', doc.name);
    });
    
    schema.post('remove', doc => {
        util.log('%s has been removed!', doc.name);
        log('model',`${this.name} ${this._id} has been saved`);
    });
    
    return mongoose.model('Pokemon', schema);
};

module.exports = exports = pokemonHandler();