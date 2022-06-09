
const { set } = require('express/lib/application');
const mongoose = require('mongoose');
const { Book, Author, Publisher } = require("../models/author_publisher_bookModel");


// assignment of date: 09.06.22 

// 1. Write a POST api that creates an author from the details in request body

const createAuthor = async function (req, res) {
    let book = req.body
    let authorCreated = await Author.create(book)
    res.send({ data: authorCreated })
}

// Create Publisher 
const createPublisher = async function (req, res) {
    let publish = req.body
    let publisherCreated = await Publisher.create(publish)
    res.send({ data: publisherCreated })
}

// Create Book
const createBook = async function (req, res) {

    let bk = req.body
    let auth = bk.author
    let pub = bk.publisher
    if (auth == 0) { res.send({ msg: "author id is required" }) }
    if (pub == 0) { res.send({ msg: "publisher id is required" }) }

    let a = await Author.findById(auth)
    if (!a) return res.send("Author is not present")
    let p = await Publisher.findById(pub)
    if (!p) return res.send("Publisher is not present")

    let bookCreated = await Book.create(bk)
    res.send({ data: bookCreated })

}

// Get all Books details with Author and Publisher 

const getalldetails = async function (req, res) {
    let bookdetails = await Book.find().populate('author').populate('publisher')
    res.send({ data: bookdetails })
}


// update isHardCover and price by add 10
const updateBook = async function (req, res) {
    let publisherid = await Publisher.find({ name: { $in: ["Penguin", "HarperCollins"] } }).select("_id");
    let updatedata
    for (let i = 0; i < publisherid.length; i++) {
        updatedata = await Book.updateMany({ publisher: publisherid[i]._id }, { $set: { isHardCover: true } })
    }
    let authorId = await Author.find({ rating: { $gt: 3.5 } }).select("_id")
    let updatedata1;
    for (let i = 0; i < authorId.length; i++) {
        updatedata1 = await Book.updateMany({ author: authorId[i]._id }, { $inc: { price: 10 } })
    }
    res.send({ msg: "Done" })
}


module.exports.createAuthor = createAuthor
module.exports.createPublisher = createPublisher
module.exports.createBook = createBook
module.exports.getalldetails = getalldetails
module.exports.updateBook = updateBook
