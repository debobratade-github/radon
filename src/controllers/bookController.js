//const bookModel = require("../models/bookModel")
const mongoose = require('mongoose');
const { Book, Author } = require("../models/bookModel");

// Created Book Schema
const createBook = async function (req, res) {
    let data = req.body
    let savedData = await Book.create(data)
    res.send({ msg: savedData })
}
// Created Author Schema
const createAuthor = async function (req, res) {
    let data = req.body
    let savedData = await Author.create(data)
    res.send({ msg: savedData })
}
//Get all book of a specific author 
const get_book_of_specific_authorge = async function (req, res) {
    let au_id = await Author.find({ author_name: "Chetan Bhagat" }).select("author_id")
    let all_books = await Book.find({ author_id: au_id[0].author_id }).select("name")
    res.send({ msg: all_books })
}
//Update price 
const update_price = async function (req, res) {
    let d = await Book.findOneAndUpdate({ name: "Two states" }, { $set: { price: 100 } }, { new: true, upsert: true })
    let ad = await Author.find({ author_id: { $eq: d.author_id } }).select({ author_name: 1, _id: 0 })
    let p = d.price
    res.send({ msg: ad, p })
}

// Find books those price in 50 to 100
const price_btwn_50_to_100 = async function (req, res) {
    let bookbetwn = await Book.find({ price: { $in: [50, 100] } }).select({ author_id: 1, name: 1 })   // book
    let authr = await Author.find()
    let authrs = []
    bookbetwn.map(item => {
        authr.map(item1 => {
            if (item.author_id == item1.author_id) {
                authrs.push(item1.author_name, item.name)
            }
        })
    })

    res.send({ msg: authrs })
}


module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.get_book_of_specific_authorge = get_book_of_specific_authorge
module.exports.update_price = update_price
module.exports.price_btwn_50_to_100 = price_btwn_50_to_100
