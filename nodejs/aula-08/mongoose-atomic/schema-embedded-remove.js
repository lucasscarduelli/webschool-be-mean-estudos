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

const post = {
    title : 'Primeiro POST',
    body : 'Post inicial',
    date : Date.now()
};
const comment = {
    title : 'Comentei aqui',
    body : 'Comentando sobre este post',
    date : Date.now()
};

const BlogPostModel = mongoose.model('BlogPost', BlogPostSchema);
const BlogPost = new BlogPostModel(post);
const id = '579fa20e25d7fccf66738220';

BlogPostModel.findById(id, function(err, post) {
    if (err) return console.log('Erro: ', err);
    post.comments[0].remove();
    post.save(function(err, data){
        if (err) return console.log('Erro interno: ', err);
        return console.log('Sucesso: ', data);
    })
});