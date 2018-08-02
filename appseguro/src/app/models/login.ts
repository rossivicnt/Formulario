export class Login {
    constructor(email = '', password = '',firstname= '') {
        this.email = email;
        this.password = password;
        this.firstname= firstname
    }

    _id: string;
    email: string;
    password: string;
    firstname?:string;
}
