export class Formulario1 {

    constructor(_id = '', NombrePaciente = '', Rut = '', Solicitud = '', Poliza = '', Diagnostico= '', 
    fechaDiagnostico= new Date(), Metodo= '', fechaPeso= '', Peso= '', Farmacos= false,
     Farmacos2= false, Tiempo= '', Talla= '', IMC= '', Tratamiento= '', patologia='', consulto= false, 
     consulto2= false, fecha_consul=new Date(), med_deriv= '', nom_medico= '', insNroCol= '', tlfn= '',
     fecha_informe= new Date()) {
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
        this.Farmacos2= Farmacos2
        this.Tiempo=  Tiempo;
        this.Peso=  Peso;
        this.Talla=  Talla;
        this.IMC=  IMC;
        this.Tratamiento=  Tratamiento;
        this.patologia= patologia;
        this.consulto= consulto;
        this.consulto2= consulto2;
        this.fecha_consul= fecha_consul;
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
    fechaPeso:  String;
    Farmacos:  Boolean;
    Farmacos2:  Boolean;
    Tiempo:  String;
    Peso:  String;
    Talla:  String;
    IMC:  String;
    Tratamiento:  String;
    patologia: String;
    consulto: Boolean;
    consulto2: Boolean;
    fecha_consul: Date;
    med_deriv: String;
    nom_medico: String;
    insNroCol: String;
    tlfn: String;
    fecha_informe: Date;
}
