'use strict';

const Schema = require('./schema');
const Model = require('./model')(Schema, 'Pokemon');

const CRUD = {
    create : function(data) {
        const Luketamon = new Model(data);
        Luketamon.save(function(err, data) {
            if (err) return console.log('ERRO: ', err);
            console.log('Inseriu: ', data);
        });        
    },
    retrieve : function(query) {
        Model.find(query, function(err, data) {
            if (err) return console.log('ERRO: ', err);
            return console.log('Buscou: ', data);
        });
    },
    update : function(query, mod, options) {
        options = options || { };
        Model.update(query, mod, options, function(err, data) {
            if (err) return console.log('ERRO: ', err);
            return console.log('Alterou: ', data);
        });
    },
    delete : function(query) {
        Model.remove(query, function(err, data) {
            if (err) return console.log('ERRO: ', err);
            return console.log('Deletou: ', data);
        });
    }
};

module.exports = CRUD;