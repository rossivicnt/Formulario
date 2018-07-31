import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
  providers: [UserService]
})
export class RegisterPageComponent implements OnInit {

  constructor(private userService: UserService,public router: Router) { }

  ngOnInit() {
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.userService.selectedUser = new User();
    }
  }

  addUser(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.userService.putUser(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getUsers();
          this.router.navigate(['/usuarios']);
        });
    } else {
      this.userService.postUser(form.value)
      .subscribe(res => {
        this.getUsers();
        this.resetForm(form);
        this.router.navigate(['/usuarios']);
      });
    }
    
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(res => {
        this.userService.users = res as User[];
      });
  }

}
