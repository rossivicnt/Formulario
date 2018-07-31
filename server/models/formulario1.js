const mongoose = require('mongoose');
const { Schema } = mongoose;

const formulario1Schema = new Schema({
    NombrePaciente: { type: String, required:true },
    Rut: { type: String, required:true  },
    Solicitud: { type: String, required:true },
    Poliza: { type: String, required:true },
    Diagnostico: { type: String, required:true },
    fechaDiagnostico: { type: Date, required:true },
    Metodo: { type: String, required:true },
    fechaPeso: { type: String, required:true },
    Farmacos: { type: String, required:true},
    Tiempo: { type: String, required:true },
    Peso: { type: String, required:true },
    Talla: { type: String, required:true },
    IMC: { type: String, required:true },
    Tratamiento: { type: String, required:true }
});

module.exports = mongoose.model('Formulario1', formulario1Schema);