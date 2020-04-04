const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema ({
    owner: {
        type: Schema.Types.ObjectID,
        ref: 'User',
        required: true,
        unique: false
    },
    order: {
        type: Schema.Types.ObjectID,
        ref: 'Order',
        required: false,
        unique: false
    },
    description: String,
    date: Date
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;