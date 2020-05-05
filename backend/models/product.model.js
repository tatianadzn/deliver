const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema ({
    owner: {
        type: Schema.Types.ObjectID,
        ref: 'User',
        required: true,
        unique: false
    },
    description: String,
    date: String,
    status: {
        type: String,
        enum: ['NEW', 'ORDERED'],
        default: 'NEW',
        required: true,
        unique: false
    },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;