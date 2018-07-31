export class User {

    constructor(_id = '', firtsname = '', lastname = '', email = '', password = '', permiso= '') {
        this._id = _id;
        this.firtsname = firtsname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.permiso = permiso; 
    }

    _id: string;
    firtsname: string;
    lastname: string;
    email: string;
    password: string;
    permiso: string;
}
