'use strict';

const _get = (v) => v.toUpperCase();
const _set = (v) => v.toLowerCase();
const _validate = (v) => v.length > 6 && v.length <= 10;

const Field = { 
    type : String,
//    get : _get,
//    set : _set,
    validate : [ _validate, 'Nome precisa ser maior que 6 e menor ou igual a 10 caracteres' ],
    required : true
};

module.exports = Field;