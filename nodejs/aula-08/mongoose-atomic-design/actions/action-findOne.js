'use strict';

const callback = require('./action-callback-http-200');
const getQuery = require('./action-get-query-http');

module.exports = (Organism) => {
    return (req, res) => {
        const query = getQuery(req.url);
        Organism.findOne(query, (err, data) => callback(err, data, res));        
    };
};