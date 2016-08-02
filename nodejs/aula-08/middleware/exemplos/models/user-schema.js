'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Post = require('./posts-schema');
const util = require('util');

let userSchema = new Schema({
    name : { type : String, required : true },
    email : { type : String, required : true, uniq : true }
});

module.exports = mongoose.model('User', userSchema);

userSchema.post('remove', user => {
    Post.remove({ _user : user._id }, postsRemoved);
});

function postsRemoved(err, ok) {
    util.log(err || ok.result);
}