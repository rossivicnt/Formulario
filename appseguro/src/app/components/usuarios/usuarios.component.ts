import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  providers: [UserService]
})

export class UsuariosComponent implements OnInit {
  public firtsname: String;
  public lastname : String;
  public email : String;
  public password : String;
  public permiso : String;

  constructor(private userService: UserService,public router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(res => {
        this.userService.users = res as User[];
      });
  }

  editUser(user: User) {
    this.userService.selectedUser = user;
    this.router.navigate(['/register']);
  }

  deleteUser(_id: string, form: NgForm) {
    if(confirm('Are you sure you want to delete it?')) {
      this.userService.deleteUser(_id)
        .subscribe(res => {
          this.getUsers();
        });
    }
  }

}
