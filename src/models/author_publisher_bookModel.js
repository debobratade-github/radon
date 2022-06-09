const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

// Author Schema
const authorSchema = new mongoose.Schema({
    authorName: {
        type: String,
        required: true
    },
    age: Number,
    address: String,
    rating: String,

});

// Publisher Schema
const publisherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    headQuarter: {
        type: String,
        required: true
    },

});


// Book Schema
const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: ObjectId,
        ref: "newAuthor"
    },
    price: Number,
    rating: Number,

    publisher: {
        type: ObjectId,
        ref: "newPublisher"
    },
    isHardCover: { type: Boolean, default: false },

})

const Book = mongoose.model('newBook', bookSchema);
const Author = mongoose.model('newAuthor', authorSchema);
const Publisher = mongoose.model('newPublisher', publisherSchema);

module.exports = { Book, Author, Publisher }



