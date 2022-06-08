const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    author_id: {
        type: String,
        required: true
    },
    author_name: {
        type: String,
        required: true
    },
    age: Number,
    address: String

});


const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author_id: {
        type: String,
        required: true
    },
    price: Number,
    rating: Number

})

const Book = mongoose.model('book', bookSchema);
const Author = mongoose.model('author', authorSchema);

module.exports = { Book, Author }



