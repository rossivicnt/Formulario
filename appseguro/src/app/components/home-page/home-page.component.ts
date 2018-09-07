import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  username:String;

  constructor(private _user: UserService, private _router: Router) { 
    this._user.user()
    .subscribe(
      data=>this.addName(data),
      error=>this._router.navigate(['/login'])
    ) 
  }

  addName(data){
    console.log(data[0]._id);
    this.username =data[0].name;
  }

  ngOnInit() {
  }

}
