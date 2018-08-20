export class Export1 {
    constructor(_id = '', usuario = '', date= new Date(), file='',formulario = '') {
        this._id = _id;
        this.usuario = usuario;
        this.date = date;
        this.file =file;
        this.formulario = formulario;
    }

    _id: string;
    usuario:  string;
    date: Date;
    file: string;
    formulario:  string;
}
