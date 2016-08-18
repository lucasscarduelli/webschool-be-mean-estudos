'use strict';

const value = 'null';

const validate = require('./isEmpty')(value);

console.log('isNull?', validate);