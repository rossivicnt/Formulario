import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
import { Observable } from 'rxjs/Observable';
//import { resolve } from 'path';
import { Router } from '@angular/router';

export interface UserDetails {
  _id: string;
  email: string;
  firtsname: string;
  exp: number;
  iat: number;
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  email: string;
  password: string;
  name?: string;
  permiso?:string;
}

@Injectable()
export class AuthService {
  //selectedLogin: Login;
  private token: string;

  //readonly URL_API = 'http://localhost:3000/api/login';

  constructor(public afAuth:AngularFireAuth,private http: HttpClient,private router: Router) { 
    //this.selectedLogin = new Login();
  }

  /*validateLogin(user: Login){
    return new Promise ((resolve, reject) => {
      this.http.post(this.URL_API, user);
    })
    
  }*/

  private saveToken(token: string): void {
    localStorage.setItem('mean-token', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  private request(method: 'post'|'get', type: 'login'|'users', user?: TokenPayload): Observable<any> {
    let base;

    if (method === 'post') {
      base = this.http.post(`/api/${type}`, user);
    } else {
      base = this.http.get(`/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    }

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );

    return request;
  }

  public register(user: TokenPayload): Observable<any> {
    return this.request('post', 'users', user);
  }

  public login(user: TokenPayload): Observable<any> {
    return this.request('post', 'login', user);
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('mean-token');
    this.router.navigateByUrl('/');
  }
  
  /*loginEmail(email:string, pass:string){
    return new Promise((resolve, reject)=> {
      this.afAuth.auth.signInWithEmailAndPassword(email,pass)
      .then(userData=>resolve(userData),err => reject(err));
    });
  }

  getAuth(){
    return this.afAuth.authState.pipe(map(auth => auth));
  }

  logout(){
    return this.afAuth.auth.signOut();
  }*/
}
