'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequisitosSchema = new Schema({
    name : String
});

const Requisitos = mongoose.model('Requisitos', RequisitosSchema);

Requisitos.schema.path('name').validate(function(value) {
    return /js|html|css|angular|node|mongodb/i.test(value);
}, 'Requisito({VALUE}) inválido!');

const requisitos = new Requisitos({ name : 'php' })
console.log(requisitos.validateSync());