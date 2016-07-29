'use strict';

const User = require('./user.js');

const user = new User({ name : 'Lucas'});
user.save();

//const invalidUser = new User({cpf: '1234'});
//invalidUser.save();
