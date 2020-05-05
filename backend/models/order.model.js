const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema ({
    owner: {
        type: Schema.Types.ObjectID,
        ref: 'User',
        required: true,
        unique: false,
        trim: true
    },
    status: {
        type: String,
        enum: ['NEW', 'SENT', 'DELIVERED', 'PAID', 'CLOSED'],
        default: 'NEW',
        required: true,
        unique: false
    },
    cost: {
        type: String,
        required: false
    },
    products: [],
    date_of_creation: Date,
    date_of_delivering: Date,
    date_of_closing: Date
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;