const mongoose = require('mongoose');
const products = require('./Product.model');

const cartSchema = new mongoose.Schema({
    items: [products.productSchema],
    total: {
        type: Number,
        default: 0
    }
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = {
    Cart,
    cartSchema
}