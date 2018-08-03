export class Export1 {
    constructor(_id = '', usuario = '', date = new Date(), formulario1 = '') {
        this._id = _id;
        this.usuario = usuario;
        this.date = date;
        this.formulario1 = formulario1;
    }

    _id: string;
    usuario:  String;
    date:  Date;
    formulario1:  String;
}
