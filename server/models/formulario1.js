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
    Farmacos: { type: Boolean, required:true},
    Farmacos: { type: Boolean, required:true},
    Tiempo: { type: String, required:false },
    Peso: { type: String, required:true },
    Talla: { type: String, required:true },
    IMC: { type: String, required:true },
    Tratamiento: { type: String, required:true },
    patologia:{ type: String, required:true },
    consulto:{ type: String, required:true },
    consulto2:{ type: String, required:true },
    fecha_consul: { type: Date, required:false },
    med_deriv:{ type: String, required:true },
    nom_medico:{ type: String, required:true },
    insNroCol:{ type: String, required:true },
    tlfn:{ type: String, required:true },
    fecha_informe: { type: Date, required:true }
});

module.exports = mongoose.model('Formulario1', formulario1Schema);