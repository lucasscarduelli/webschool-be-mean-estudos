'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new Schema({
    title : String,
    body : String,
    userEmail : String,
    _user : {
        type : Schema.ObjectId,
        ref : 'User'
    }
});

module.exports = mongoose.model('Post', postSchema);

postSchema.post('save', post => {
    console.log(post);
});