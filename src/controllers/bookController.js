const bookModel = require("../models/bookModel")

const createBook = async function (req, res) {
    let data = req.body
    let savedData = await bookModel.create(data)
    res.send({ msg: savedData })
}

const bookList = async function (req, res) {
    let data = await bookModel.find().select({ bookName: 1, authorName: 1, _id: 0 })
    res.send({ msg: data })

}

const getBooksInYear = async function (req, res) {
    let yr = req.query.year
    let data = await bookModel.find({ year: { $eq: yr } })
    res.send({ msg: data })

}

const getParticularBooks = async function (req, res) {
    let nm = req.query.bookName
    let yr = req.query.year
    let data = await bookModel.find({ $or: [{ bookName: { $eq: nm } }, { year: { $eq: yr } }] })
    res.send({ msg: data })
}

const getXINRBooks = async function (req, res) {
    let data = await bookModel.find({ "$or": [{ "price.indianPrice": "100INR" }, { "price.indianPrice": "200INR" }, { "price.indianPrice": "500INR" }] })
    res.send({ msg: data })
}

const getRandomBooks = async function (req, res) {
    let data = await bookModel.find({ $or: [{ stockAvaliable: true }, { totalPages: { $gt: 500 } }] })

    res.send({ msg: data })

}

module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks