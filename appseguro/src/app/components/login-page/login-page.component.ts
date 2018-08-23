import { Component, OnInit } from '@angular/core';
import { AuthService , TokenPayload} from '../../services/auth.service';
import { Router } from  '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [AuthService]
})
export class LoginPageComponent implements OnInit {
  //public email: string;
  //public password: string;
  credentials: TokenPayload = {
    email: '',
    password: ''
  };

  constructor(
    public authService: AuthService,
    public router: Router
  ) { } 

  ngOnInit() {
  }

  /*OnSubmitLogin(form?: NgForm){
    this.authService.loginEmail(this.email, this.password)
    .then((res)=>{
      this.router.navigate(['/privado']);
    }).catch((err)=>{
      console.log(err);
      this.router.navigate(['/login']);
    })
  
  }*/

  login() {
    this.authService.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/privado');
    }, (err) => {
      console.error(err);
    }); 
  }

}
