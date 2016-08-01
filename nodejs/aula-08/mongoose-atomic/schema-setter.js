'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

function toLower(v) {
    return  v.toLowerCase();
};

const userSchema = new Schema({
    email : {
        type : String,
        set : toLower
    }
});

const User = mongoose.model('User', userSchema);
const user = new User({ email : 'LUCAS@scarduelli.com' });

console.log(user.email);