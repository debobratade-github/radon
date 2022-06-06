const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    authorName: String,
    catagory:String, 
    year:Number,
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) 



