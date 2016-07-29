'use strict';

const promiseAll = require('./modules/promise-all');
const readFile = require('./modules/fs-promise');

promiseAll([
    readFile('./resource/persons.json'),
    readFile('./resource/friends.json')
])
.then(res => console.log(res))
.catch(err => console.error(err));