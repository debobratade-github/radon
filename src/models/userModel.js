const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        required: true,
        default: 100
    },
    address: {
        type: String,
        required: true
    },
    age: Number,
    grnder: {
        type: String,
        enum: ["male", "female"]
    },
    isFreeAppUser: { type: Boolean, default: false },


});


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: Number,

})
const orderSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: "user"
    },
    productId: {
        type: ObjectId,
        ref: "product"
    },
    amount: Number,

    isFreeAppUser: {
        type: Boolean, default: false,
    },

    date: String
})
const UserDocument = mongoose.model('user', userSchema);
const ProductDocument = mongoose.model('product', productSchema);
const OrderDocument = mongoose.model('order', orderSchema);

module.exports = { UserDocument, ProductDocument, OrderDocument }



