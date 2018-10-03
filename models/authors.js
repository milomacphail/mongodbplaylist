const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://MiloMacPhail:Pandahead7!@ds153890.mlab.com:53890/mongodbplaylist', {useNewUrlParser: true});

//Create Schema and Model

const BookSchema = new Schema({
    name: String,
    pages: Number,
});

const AuthorSchema = new Schema({
    name: String,
    age: Number,
    books: [BookSchema]
});

const Author = mongoose.model('authors', AuthorSchema);

module.exports = Author;
