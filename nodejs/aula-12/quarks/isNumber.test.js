'use strict';

const valueTrue = 1;
const valueFalse = 'a';

const validateTrue = require('./isNumber')(valueTrue);
const validateFalse = require('./isNumber')(valueFalse);

console.log(valueTrue + ' is a isNumber?', validateTrue);
console.log(valueFalse + ' is a isNumber?', validateFalse);