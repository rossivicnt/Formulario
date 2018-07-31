export class Formulario1 {

    constructor(_id = '', NombrePaciente = '', Rut = '', Solicitud = '', Poliza = '', Diagnostico= '', 
    fechaDiagnostico= new Date(), Metodo= '', fechaPeso= '', Peso= '', Farmacos= '', Tiempo= '',
    Talla= '', IMC= '', Tratamiento= '') {
        this._id = _id;
        this.NombrePaciente = NombrePaciente;
        this.Rut = Rut;
        this.Solicitud = Solicitud;
        this.Poliza = Poliza;
        this.Diagnostico = Diagnostico;
        this.fechaDiagnostico = fechaDiagnostico;
        this.Metodo = Metodo;
        this.fechaPeso=  fechaPeso;
        this.Farmacos=  Farmacos;
        this.Tiempo=  Tiempo;
        this.Peso=  Peso;
        this.Talla=  Talla;
        this.IMC=  IMC;
        this.Tratamiento=  Tratamiento;

    }

    _id: string;
    NombrePaciente:  String;
    Rut:  String;
    Solicitud:  String;
    Poliza:  String;
    Diagnostico:  String;
    fechaDiagnostico:  Date;
    Metodo:  String;
    fechaPeso:  String;
    Farmacos:  String;
    Tiempo:  String;
    Peso:  String;
    Talla:  String;
    IMC:  String;
    Tratamiento:  String;
}
