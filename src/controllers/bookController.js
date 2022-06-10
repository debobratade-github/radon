
const { set } = require('express/lib/application');
const mongoose = require('mongoose');
const { Book, Author } = require("../models/bookModel");


// Book by author id as user input 
const bookbyauthor = async function (req, res) {
    let r = req.body
    let bookbetwn = await Book.find(r).select({ name: 1, _id: 0 })   // book

    res.send({ msg: bookbetwn })
}


// Find Author name whose age is greater than 50 and has at least one book with 4 up rating 
const authorage50andratinggrt4 = async function (req, res) {

    let bookbetwn = await Author.find({ age: { $gt: 50 } }).select({ author_id: 1, author_name: 1, age: 1 })   // book
    let rat = await Book.find({ ratings: { $gt: 4 } }).select({ author_id: 1, _id: 0 })
    let authrs = []
    bookbetwn.map(item => {
        rat.map(item1 => {
            if (item.author_id == item1.author_id) {
                authrs.push(item.author_name, item.age)
            }
        })
    })
    let fil = authrs.filter((val, index) => authrs.indexOf(val) == index);
    res.send({ msg: fil })
}


module.exports.bookbyauthor = bookbyauthor
module.exports.authorage50andratinggrt4 = authorage50andratinggrt4