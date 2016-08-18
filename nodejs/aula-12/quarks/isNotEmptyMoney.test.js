'use strict';

const valueTrue = 1;
const valueFalse = 0;

const validateTrue = require('./isNotEmptyMoney')(valueTrue);
const validateFalse = require('./isNotEmptyMoney')(valueFalse);

console.log(valueTrue + ' is NotEmptyMoney?', validateTrue);
console.log(valueFalse + ' is NotEmptyMoney?', validateFalse);