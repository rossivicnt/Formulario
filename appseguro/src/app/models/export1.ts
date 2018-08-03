export class Export1 {
    constructor(_id = '', usuario = '', file='',formulario1 = '') {
        this._id = _id;
        this.usuario = usuario;
        this.file =file;
        this.formulario1 = formulario1;
    }

    _id: string;
    usuario:  string;
    file: string;
    formulario1:  string;
}
