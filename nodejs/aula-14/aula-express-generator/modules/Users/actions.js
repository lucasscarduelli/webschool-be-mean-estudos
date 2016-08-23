'use strict';

const PokemonModel = require('./model');

const callback = function(err, data, res) {
    if (err) return console.log('ERRO: ', err);
    return res.json(data);
};

const Actions = {};

Actions.listar = function(req, res) {
    const query = {};
    PokemonModel.find(query, (err, data) => {
        callback(err, data, res);
    });
};

Actions.consultar = function(req, res) {
    const query = { _id : req.params.id };
    PokemonModel.findOne(query, (err, data) => {
        callback(err, data, res);
    });
};

Actions.remover = function(req, res) {
    const query = { _id : req.params.id };
    PokemonModel.remove(query, (err, data) => {
        callback(err, data, res);
    });
};

Actions.alterar = function(req, res) {
    const query = { _id : req.params.id };
    const body = req.body;
    PokemonModel.update(query, body, (err, data) => {
        callback(err, data, res);
    });
};

Actions.cadastrar = function(req, res) {
    const body = req.body;
    const pokemon = new PokemonModel(body);
    pokemon.save((err, data) => {
        callback(err, data, res);
    });    
};

module.exports = Actions;