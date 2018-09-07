const mongoose = require('mongoose');
const { Schema } = mongoose;
var bcrypt = require('bcrypt');

const UsersSchema = new Schema({
    name: {type: String, required:true},
    email: {type: String, required:true, unique:true},
    password: {type: String, required:true},
    permiso: {type: String, required:true},
    creation_dt:{type:Date, require:true}
});

UsersSchema.statics.hashPassword = function hashPassword(password){
  return bcrypt.hashSync(password,10);
}

UsersSchema.methods.isValid = function(hashedpassword){
  return  bcrypt.compareSync(hashedpassword, this.password);
}

module.exports = mongoose.model('Users', UsersSchema);