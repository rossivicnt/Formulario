import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service';
import { Router } from  '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [UserService]
})
export class LoginPageComponent implements OnInit {
  loginForm : FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null, Validators.required)
  });

  constructor(
    private _user:UserService,
    private _router: Router
  ) { } 

  ngOnInit() {
  }

  login(){
    if(!this.loginForm.valid){
      console.log('Invalid');return;
    }

    // console.log(JSON.stringify(this.loginForm.value));
    this._user.login(JSON.stringify(this.loginForm.value))
    .subscribe(
      data=>{console.log(data);
      this._router.navigate(['/user']);} ,
      error=>console.error(error)
    )
  }

}
