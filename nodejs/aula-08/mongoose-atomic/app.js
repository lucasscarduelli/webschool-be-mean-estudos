'use strict';

require('./db/config');

const CRUD = require('./pokemon-controller');
const query = {name: /luketamon/i};

const data = {
    name : 'Luketamon',
    description : 'Meu pokemon',
    type : 'terra',
    attack : 69,
    defense : 96,
    heigth : 0.9
}

const mod = { attack : 51 };
const options = { multi : true };

CRUD.retrieve(query);
//CRUD.create(data);
//CRUD.update(query, mod, options);
//CRUD.delete(query);