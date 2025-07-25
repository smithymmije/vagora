const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    googleId: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: false
    },
    profileImage: {
        type: String,
        //required: true
        default: '/images/default-user.png' // <-- CORREÇÃO AQUI!
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);