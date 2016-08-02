'use strict';

const mongoose = require('mongoose');
const models = require('./models/index');

mongoose.connect('mongodb://localhost/be-mean-instagram');

models.User.findOne({ email : 'lucas@scarduelli.com' }, result);

function result(err, user) {
    if (!err) {
        user.remove();
    }
}