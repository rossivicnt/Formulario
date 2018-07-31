const mongoose = require('mongoose');
const { Schema } = mongoose;
var Formulario1 = mongoose.model('Formulario1');
var Formulario1 = mongoose.model('Formulario1');

const exportSchema = new Schema({
    usuario: { type: Schema.ObjectId, ref:"Users", required:true },
    date: { type: Date, required:true  },
    File: { type: String, required:true },
    formulario1: { type: Schema.ObjectId, ref:"Formulario1", required:true }
});

module.exports = mongoose.model('Export', exportSchema);