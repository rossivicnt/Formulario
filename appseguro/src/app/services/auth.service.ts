import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {


  constructor(public afAuth:AngularFireAuth,private http: HttpClient,private router: Router) { 
  }

  
  loginEmail(email:string, pass:string){
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
  }
}
