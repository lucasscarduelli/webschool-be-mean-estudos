'use strict';

const Model = require('./pokemon-schema');

const CRUD = {
    create : function(data, callback) {
        const luketamon = new Model(data);
        luketamon.save(callback);
    },
    retrieve : function(query, callback) {
        Model.find(query, callback);
    },
    update : function(query, mod, options, callback) {
        options = options || {};
        Model.update(query, mod, options, callback);
    },
    delete : function(query, callback) {
        Model.remove(query, callback);
    }
};

module.exports = CRUD;