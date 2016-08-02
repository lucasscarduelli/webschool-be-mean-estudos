'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/teste');

const userSchema = new Schema({
    name : String,
    email : String,
    created_at : { type : String, default : Date.now, index : true }
});

userSchema.index({ name : 1, email : -1 });

const User = mongoose.model('Usuario', userSchema);
const user = {
    name : 'Lucas Boeing Scarduelli - usuário 2',
    email : 'lucas@scarduelli.com'
};

User.create(user, (err, data) => {
    if (err) return console.log('Error: ', err);
    return console.log('Inseriu: ', data);
});