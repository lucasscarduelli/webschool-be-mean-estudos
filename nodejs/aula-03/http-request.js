'use strict';

const http = require('http');

const options = {
      host:'api.redtube.com'
    , path:'/?data=redtube.Videos.searchVideos&search=Sasha%20Gray'
};

function callback(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    
    let data = '';
    
    res.setEncoding('utf8');
    res.on('data', (chuck) => {const req = http.request(options, callback);

req.on('error', (e) => {
    console.log('ERRO: ' + e.message);
});

req.end();
        data += chuck;
    });
    res.on('end', () => {
        console.log('Dados finalizados: ', data);
    });
};

const req = http.request(options, callback);

req.on('error', (e) => {
    console.log('ERRO: ' + e.message);
});

req.end();