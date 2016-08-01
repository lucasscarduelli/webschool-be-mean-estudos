'use strict';

const model = require('./models/posts');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/teste');

const post = {
    title : 'Post de teste do plugin',
    body : 'Corpo do post'
};

model.create(post, createPost);
             
function createPost(err, post) {
    if (err) throw err;
    else {
        console.log(post);
        process.exit(1);
    }
};