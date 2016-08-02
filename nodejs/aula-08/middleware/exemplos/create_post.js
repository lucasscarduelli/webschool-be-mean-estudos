'use strict';

const mongoose = require('mongoose');
const models = require('./models/index');

mongoose.connect('mongodb://localhost/be-mean-instagram');

let post = new models.Post();

post.title = 'Mongoose Middleware';
post.body = 'Middleware';
post.userEmail = 'lucas@scarduelli.com';

models.User.findOne(
    { email : post.userEmail }, (err, user) => {
        if (err) {
            throw err;
        }
        post._user = user._id;
        post.save();
    }
);