const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');
var jwt = require('jsonwebtoken');

const UsersSchema = new Schema({
    name: {type: String, required:true},
    email: {type: String, required:true, unique:true},
    permiso: {type: String, required:true}
});

UsersSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};
  
UsersSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};

UsersSchema.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
  
    return jwt.sign({
      _id: this._id,
      email: this.email,
      firtsname: this.firtsname,
      exp: parseInt(expiry.getTime() / 1000),
    }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

module.exports = mongoose.model('Users', UsersSchema);