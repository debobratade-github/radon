const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})   
}

const getBookData= async function (req, res) {
    let allUsers= await bookModel.find()
    let name = req.body.authorName
    res.send({msg: name})
    console.log(name);
}

module.exports.createBook= createBook
module.exports.getBookData= getBookData