'use strict';

const valueTrue = 1;
const valueFalse = 'a';

const Quark = require('./isNotEmptyMoneyMongooseValidate');

const validateTrue = Quark.validator(valueTrue);
const validateFalse = Quark.validator(valueFalse);

console.log(valueTrue + ' is not empty number?', validateTrue);
console.log(valueFalse + ' is not empty number?', validateFalse);