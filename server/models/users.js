const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsersSchema = new Schema({
    firtsname: {type: String, required:true},
    lastname: {type: String, required:true},
    email: {type: String, required:true},
    password: {type: String, required:true},
    permiso: {type: String, required:true}
});

module.exports = mongoose.model('Users', UsersSchema);