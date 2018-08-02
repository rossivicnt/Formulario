import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { auth } from '../../../../node_modules/firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isLogin: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth=>{
      if (auth){
        this.isLogin= true;
        this.nombreUsuario= auth.displayName;
        this.emailUsuario= auth.email;
      }else{
        this.isLogin= false;
      }
    })
  }

  onClickLogout(){
    this.authService.logout();
  }

}
