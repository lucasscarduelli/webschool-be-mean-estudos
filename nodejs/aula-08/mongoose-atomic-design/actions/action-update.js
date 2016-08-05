'use strict';

const querystring = require('querystring');

const callback = require('./action-callback-http-200');
const getQuery = require('./action-get-query-http');

module.exports = (Organism) => {
    return (req, res) => {
        let queryData = '';
        req.on('data', (data) => {
            queryData += data;
        });

        req.on('end', () => {
            const mod = querystring.parse(queryData);
            const query = getQuery(req.url);
            const options = {};

            Organism.update(query, mod, options, (err, data) => callback(err, data, res));        
        });
    };
};