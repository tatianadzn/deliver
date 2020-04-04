const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    first_name: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    second_name: {
        type: String,
        required: false,
        unique: false,
        trim: true
    },
    user_role: {
        type: String,
        enum: ['USER', 'MANAGER'],
        default: 'USER',
        required: true,
        unique: false,
        trim: true
    },
    address: {
        type: String,
        required: true,
        unique: false,
        trim: false
    },
    mobile: {
        type: String,
        required: true,
        unique: false,
        trim: false
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;