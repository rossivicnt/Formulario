const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');

const UsersSchema = new Schema({
    name: {type: String, required:true},
    email: {type: String, required:true, unique:true},
    password: {type: String, required:true},
    permiso: {type: String, required:true}
});

module.exports = mongoose.model('Users', UsersSchema);