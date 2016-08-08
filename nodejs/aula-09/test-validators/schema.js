'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const greaterThanEighteen = (age) => age >= 18;
const toLower = (v) => v.toLowerCase();

const _schema = {
    name : {
        first : String,
        last : String
    },
    age : {
        type : Number,
        validate : {
            validator : greaterThanEighteen,
            message : 'Sua idade ({VALUE}) não é permitida!'
        }
    },
    email : {
        type : String,
        set : toLower
    }
};

const userSchema = new Schema(_schema);

userSchema.virtual('name.full').get(function() {
    return this.name.first + ' ' + this.name.last;
});
    
module.exports = mongoose.model('User', userSchema);