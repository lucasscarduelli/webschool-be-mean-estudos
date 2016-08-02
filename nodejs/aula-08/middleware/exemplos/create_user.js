'use strict';

const mongoose = require('mongoose');
const models = require('./models/index');

mongoose.connect('mongodb://localhost/be-mean-instagram');

let user = new models.User();

user.name = 'Lucas Boeing Scarduelli';
user.email = 'lucas@scarduelli.com';
user.save();