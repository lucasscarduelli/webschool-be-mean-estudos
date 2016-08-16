'use strict';

const fs = require('fs');
const util = require('util');
const express = require('express');
const app = express();
const formidable = require('formidable');

app.post('/upload', (req, res) => {
    const form = new formidable.IncomingForm();
    form.uploadDir = 'public/images'; // Se a pasta não existir ele não cria automaticamente, tem que criar na mão.
    
    form.parse(req, (err, fields, files) => {
        res.writeHead(200, {'content-type' : 'text/plain'});
        res.write('received upload: \n\n');
        res.end(util.inspect({fields : fields, files : files}));
    });
});

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    fs.createReadStream('./index-file.html').pipe(res);
});

app.listen(3000);