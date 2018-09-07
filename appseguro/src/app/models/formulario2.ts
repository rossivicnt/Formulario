export class Formulario2 {

    constructor(_id = '', NombrePaciente = '', Rut = '', Solicitud = '', Poliza = '', Diagnostico= '', 
    fechaDiagnostico= new Date(), Metodo= '', sintomas= '', Peso= '', Farmacos= '', Tiempo= '',
    Tratamiento= '', patologia='', med_deriv= '', nom_medico= '', insNroCol= '', tlfn= '',
    fecha_informe= new Date()) {
        this._id = _id;
        this.NombrePaciente = NombrePaciente;
        this.Rut = Rut;
        this.Solicitud = Solicitud;
        this.Poliza = Poliza;
        this.Diagnostico = Diagnostico;
        this.fechaDiagnostico = fechaDiagnostico;
        this.Metodo = Metodo;
        this.sintomas=  sintomas;
        this.Tiempo=  Tiempo;
        this.Peso=  Peso;
        this.Tratamiento=  Tratamiento;
        this.patologia= patologia;
        this.med_deriv = med_deriv;
        this.nom_medico= nom_medico;
        this.insNroCol= insNroCol;
        this.tlfn= tlfn;
        this.fecha_informe= fecha_informe;
    }

    _id: string;
    NombrePaciente:  String;
    Rut:  String;
    Solicitud:  String;
    Poliza:  String;
    Diagnostico:  String;
    fechaDiagnostico:  Date;
    Metodo:  String;
    sintomas:  String;
    Tiempo:  String;
    Peso:  String;
    Tratamiento:  String;
    patologia: String;
    med_deriv: String;
    nom_medico: String;
    insNroCol: String;
    tlfn: String;
    fecha_informe: Date;
}