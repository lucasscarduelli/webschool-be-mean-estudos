'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/teste');

const CommentsSchema = new Schema({
    title : String,
    body : String,
    date : Date
});
const BlogPostSchema = new Schema({
    title : String,
    body : String,
    comments : [CommentsSchema]
});

const BlogPostModel = mongoose.model('BlogPost', BlogPostSchema);
const post_id = '579fa4d6d0e33a1168679ee7';
const comment_id = '579fa4d6d0e33a1168679ee8';

BlogPostModel.findById(post_id, function(err, post) {
    if (err) return console.log('Erro: ', err);
    return console.log('Achou esse comentário: ', post.comments.id(comment_id));
});