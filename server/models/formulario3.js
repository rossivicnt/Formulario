const mongoose = require('mongoose');
const { Schema } = mongoose;

const formulario3Schema = new Schema({
    fechaRecepcion:{ type: String, required:true },
    inicial: { type: Boolean, required:true},
    incorporacion: { type: Boolean, required:true},
    modificacion: { type: Boolean, required:true},
    complementario: { type: Boolean, required:true},
    ampliacion: { type: Boolean, required:true},
    adicional: { type: Boolean, required:true},
    vida: { type: Boolean, required:true},
    NombreContratante: { type: String, required:true },
    Rut:  { type: String, required:true },
    Poliza:  { type: String, required:true },
    Grupo:  { type: String, required:true },
    Rut2: { type: String, required:true },
    ApellidoPaterno: { type: String, required:true },
    ApellidoMaterno: { type: String, required:true },
    NombreTitular: { type: String, required:true },
    FechaNacimiento:{ type: String, required:true },
    Sexo: { type: String, required:true },
    EstadoCivil: { type: String, required:true },
    SistemPrevSalud: { type: String, required:true },
    Actividad: { type: String, required:true },
    DireccionParticular: { type: String, required:true },
    Numero: { type: String, required:true },
    Departamento: { type: String, required:true },
    Sector: { type: String, required:true },
    Comuna: { type: String, required:true },
    Ciudad: { type: String, required:true },
    CuentaCorriente: { type: String, required:true },
    TelefonoCelular: { type: String, required:true },
    Peso: { type: String, required:true },
    Estatura: { type: String, required:true },
    Email: { type: String, required:true },
    Banco: { type: String, required:true },
    TelefonoFijo: { type: String, required:true },
    FechaVigencia:{ type: String, required:true },
    FechaIngresoEmpresa:{ type: String, required:true },
    CapitalUF: { type: String, required:true },
    Renta: { type: String, required:true },
    AdNom1: { type: String, required:false },
    AdNom2: { type: String, required:false },
    AdNom3: { type: String, required:false },
    AdNom4: { type: String, required:false },
    AdRut1: { type: String, required:false },
    AdRut2: { type: String, required:false },
    AdRut3: { type: String, required:false },
    AdRut4: { type: String, required:false },
    AdFN1: { type: String, required:false },
    AdFN2: { type: String, required:false },
    AdFN3: { type: String, required:false },
    AdFN4: { type: String, required:false },
    AdParen1: { type: String, required:false },
    AdParen2: { type: String, required:false },
    AdParen3: { type: String, required:false },
    AdParen4: { type: String, required:false },
    AdSPS1: { type: String, required:false },
    AdSPS2: { type: String, required:false },
    AdSPS3: { type: String, required:false },
    AdSPS4: { type: String, required:false },
    AdPeso1: { type: String, required:false },
    AdPeso2: { type: String, required:false },
    AdPeso3: { type: String, required:false },
    AdPeso4: { type: String, required:false },
    AdEstatura1: { type: String, required:false },
    AdEstatura2: { type: String, required:false },
    AdEstatura3: { type: String, required:false },
    AdEstatura4: { type: String, required:false },
    ckSi1: { type: Boolean, required:true },
    ckNo1: { type: Boolean, required:true },
    ckSi2: { type: Boolean, required:true },
    ckNo2: { type: Boolean, required:true },
    PNom1: { type: String, required:false },
    PNom2: { type: String, required:false },
    PNom3: { type: String, required:false },
    PNom4: { type: String, required:false },
    PNom5: { type: String, required:false },
    PCod1: { type: String, required:false },
    PCod2: { type: String, required:false },
    PCod3: { type: String, required:false },
    PCod4: { type: String, required:false },
    PCod5: { type: String, required:false },
    PEnfer1: { type: String, required:false },
    PEnfer2: { type: String, required:false },
    PEnfer3: { type: String, required:false },
    PEnfer4: { type: String, required:false },
    PEnfer5: { type: String, required:false },
    PFechaD1: { type: String, required:false },
    PFechaD2: { type: String, required:false },
    PFechaD3: { type: String, required:false },
    PFechaD4: { type: String, required:false },
    PFechaD5: { type: String, required:false },
    PCond1: { type: String, required:false },
    PCond2: { type: String, required:false },
    PCond3: { type: String, required:false },
    PCond4: { type: String, required:false },
    PCond5: { type: String, required:false },
    PTrata1: { type: String, required:false },
    PTrata2: { type: String, required:false },
    PTrata3: { type: String, required:false },
    PTrata4: { type: String, required:false },
    PTrata5: { type: String, required:false },
    POtros1: { type: String, required:false },
    POtros2: { type: String, required:false },
    POtros3: { type: String, required:false },
    POtros4: { type: String, required:false },
    POtros5: { type: String, required:false },
    PCNS1: { type: String, required:false },
    PCNS2: { type: String, required:false },
    PCNS3: { type: String, required:false },
    PCNS4: { type: String, required:false },
    PCNS5: { type: String, required:false },
    fechaDeclaracion: { type: String, required:true },
    DNombre1: { type: String, required:false },
    DNombre2: { type: String, required:false },
    DNombre3: { type: String, required:false },
    DNombre4: { type: String, required:false },
    DDiag1: { type: String, required:false },
    DDiag2: { type: String, required:false },
    DDiag3: { type: String, required:false },
    DDiag4: { type: String, required:false },
    DFecha1: { type: String, required:false },
    DFecha2: { type: String, required:false },
    DFecha3: { type: String, required:false },
    DFecha4: { type: String, required:false },
    ckSi3: { type: Boolean, required:true },
    ckNo3: { type: Boolean, required:true },
    ckSi4: { type: Boolean, required:true },
    ckNo4: { type: Boolean, required:true },
    Quien1: { type: String, required: false},
    Quien2: { type: String, required: false},
    Deporte1: { type: String, required: false},
    Deporte2: { type: String, required: false},
    RazonSocial: { type: String, required:true},
    CRut: { type: String, required: true},
    NroPoliza: { type: String, required: true},
    UF: { type: String, required: true},
    NroRentas: { type: String, required: true},
    CRut2: { type: String, required: true},
    CNombre: { type: String, required: true},
    CFecha: { type: String, required: true},
    BNombre1: { type: String, required: true},
    BApellidoP1: { type: String, required: true},
    BApellidoM1: { type: String, required: true},
    BRut1: { type: String, required: true},
    BRelacion1: { type: String, required: true},
    BPorcentaje1: { type: String, required: true},
    BMail1: { type: String, required: true},
    BFono1: { type: String, required: true},
    BDir1: { type: String, required: true},
    BNombre2: { type: String, required: false},
    BApellidoP2: { type: String, required: false},
    BApellidoM2: { type: String, required: false},
    BRut2: { type: String, required: false},
    BRelacion2: { type: String, required: false},
    BPorcentaje2: { type: String, required: false},
    BMail2: { type: String, required: false},
    BFono2: { type: String, required: false},
    BDir2: { type: String, required: false},
    BNombre3: { type: String, required: false},
    BApellidoP3: { type: String, required: false},
    BApellidoM3: { type: String, required: false},
    BRut3: { type: String, required: false},
    BRelacion3: { type: String, required: false},
    BPorcentaje3: { type: String, required: false},
    BMail3: { type: String, required: false},
    BFono3: { type: String, required: false},
    BDir3: { type: String, required: false},
    BNombre4: { type: String, required: false},
    BApellidoP4: { type: String, required: false},
    BApellidoM4: { type: String, required: false},
    BRut4: { type: String, required: false},
    BRelacion4: { type: String, required: false},
    BPorcentaje4: { type: String, required: false},
    BMail4: { type: String, required: false},
    BFono4: { type: String, required: false},
    BDir4: { type: String, required: false},
    BNombre5: { type: String, required: false},
    BApellidoP5: { type: String, required: false},
    BApellidoM5: { type: String, required: false},
    BRut5: { type: String, required: false},
    BRelacion5: { type: String, required: false},
    BPorcentaje5: { type: String, required: false},
    BMail5: { type: String, required: false},
    BFono5: { type: String, required: false},
    BDir5: { type: String, required: false},
    ck: { type: Boolean, required: false},
    fechaf: { type: String, required: true},
    ckPolizaVida: { type: Boolean, required: true},
    ckPoliza: { type: Boolean, required: true},
    FechaIniVig: { type: String, required: true},
    Poliza1: { type: String, required: true},
    Poliza2: { type: String, required: true},
    CodPlanes: { type: String, required: true}
    
});

module.exports = mongoose.model('Formulario3', formulario3Schema);