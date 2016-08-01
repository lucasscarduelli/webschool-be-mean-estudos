'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamp = require('../plugins/timestemp');

const BlogPostSchema = new Schema({
    id : Schema.ObjectId,
    title : String,
    body : String,    
});

BlogPostSchema.plugin(timestamp);

module.exports = mongoose.model('Post', BlogPostSchema);