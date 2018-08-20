const mongoose = require('mongoose');
const { Schema } = mongoose;

const exportSchema = new Schema({
    usuario: {type: String, required:true},
    date: { type: Date, required:true  },
    file: { type: String, required:true },
    formulario: {type: String, required:true},
});

module.exports = mongoose.model('Export', exportSchema);