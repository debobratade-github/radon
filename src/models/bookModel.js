const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        indianPrice: String,
        europePrice: String,
    },
    year: { type: Number, default: 2021 },

    tags: [String],
    authorName: String,
    totalPages: String,
    stockAvaliable: {
        type: String,
        enum: ["true", "false"]

    }
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema)



