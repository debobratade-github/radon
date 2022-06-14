
const { set } = require('express/lib/application');
const mongoose = require('mongoose');
const { UserDocument, ProductDocument, OrderDocument } = require("../models/userModel");




// create API for product
const createProduct = async function (req, res) {
    let data = req.body
    let savedData = await ProductDocument.create(data)
    res.send({ msg: savedData })
}
// create API for user

const createUser = async function (req, res) {
    let data = req.body
    data.isFreeAppUser = req.headers["isfreeappuser"];
    let savedData = await UserDocument.create(data)
    res.send({ msg: savedData })

}
// create API for order 

const createOrder = async function (req, res) {
    let data = req.body
    const date = new Date()
    let header = req.headers["isfreeappuser"];

    if (!data.userId) res.send("Please enter user id")
    let user = await UserDocument.findById(data.userId);

    if (!user) res.send("Enter user id is not valid")
    if (!data.productId) res.send("Please enter product id")
    let Product = await ProductDocument.findById(data.productId);
    if (!Product) res.send("Enter product id is not valid")
    if (user.isFreeAppUser == true)
        data["amount"] = 0;
    data["isFreeAppUser"] = header;


    let amount = Product.price;
    if (user.isFreeAppUser == false && amount > user.balance) res.send("Insufficient balance")
    else if (user.isFreeAppUser == false && amount < user.balance) {
        user = await UserDocument.findById(data.userId).updateOne({ $inc: { balance: - amount } });
        data["amount"] = amount;
        data["isFreeAppUser"] = header;
    }
    data["date"] = date.toLocaleDateString("en-US")
    let savedata = await OrderDocument.create(data);
    res.send(savedata)

}





module.exports.createProduct = createProduct
module.exports.createUser = createUser
module.exports.createOrder = createOrder



