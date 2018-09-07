import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogin: Boolean;
  

  constructor(public authService: UserService, private _router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout()
    .subscribe(
      data=>{console.log(data);
      this._router.navigate(['/login'])},
      error=>console.error(error)
    )
  }

}
