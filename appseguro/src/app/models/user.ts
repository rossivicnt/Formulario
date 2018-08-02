export class User {

    constructor(_id = '', name = '', email = '', password = '', permiso= '') {
        this._id = _id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.permiso = permiso; 
    }

    _id: string;
    name: string;
    email: string;
    password: string;
    permiso: string;
}
