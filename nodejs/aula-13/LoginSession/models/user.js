'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    email : { type : String, unique : true, require : true},
    password : { type : String, require : true}
});

module.exports = mongoose.model('User', schema);
