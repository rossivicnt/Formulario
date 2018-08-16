const mongoose = require('mongoose');
const { Schema } = mongoose;

const exportSchema = new Schema({
    usuario: {type: String, required:true},
    date: { type: Date, required:true  },
    File: { type: String, required:true },
    formulario1: {type: String, required:true},
});

module.exports = mongoose.model('Export', exportSchema);