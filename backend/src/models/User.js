const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    CNPJ: String,

});

module.exports = mongoose.model('User', UserSchema);