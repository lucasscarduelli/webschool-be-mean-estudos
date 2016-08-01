'use strict';

const model = require('./models/posts');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/teste');

// 579faf9a9c89afc96ac3f106
const _id = process.argv[2];
const id = { _id : _id };
const mod = { body : 'Alterado corpo do post' };

model.update(id, mod, response);
             
function response(err, post) {
    if (err) throw err;
    else {
        console.log(post);
        process.exit(1);
    }
};
