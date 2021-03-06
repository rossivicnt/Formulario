const mongoose = require('mongoose');
const { Schema } = mongoose;

const formulario2Schema = new Schema({
    NombrePaciente: { type: String, required:true },
    Rut: { type: String, required:true  },
    Solicitud: { type: String, required:true },
    Poliza: { type: String, required:true },
    Diagnostico: { type: String, required:true },
    fechaDiagnostico: { type: Date, required:true },
    Metodo: { type: String, required:true },
    sintomas: { type: String, required:true },
    Tiempo: { type: String, required:true },
    Peso: { type: String, required:true },
    Tratamiento: { type: String, required:true },
    patologia:{ type: String, required:true },
    med_deriv:{ type: String, required:true },
    nom_medico:{ type: String, required:true },
    insNroCol:{ type: String, required:true },
    tlfn:{ type: String, required:true },
    fecha_informe: { type: Date, required:true }
});

module.exports = mongoose.model('Formulario2', formulario2Schema);