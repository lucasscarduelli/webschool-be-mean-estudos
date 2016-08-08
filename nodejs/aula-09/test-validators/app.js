'use strict';

const User = require('./schema');

let u = new User();

u.age = 1;
u.email = 'LUCAS@scarduelli.com'
const validate = u.validateSync();

console.log(u.email);
console.log('validate: ' + validate);