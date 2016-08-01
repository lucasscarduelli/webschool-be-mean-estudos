'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const name = require('./fields/fields-name');
const description = require('./fields/fields-description');
const type = require('./fields/fields-type');
const attack = require('./fields/fields-attack');
const defense = require('./fields/fields-defense');
const heigth = require('./fields/fields-heigth');
const created_at = require('./fields/fields-created_at');

const _schema = {
    name,
    description,
    type,
    attack,
    defense,
    heigth,
    created_at
};

module.exports = new Schema(_schema);