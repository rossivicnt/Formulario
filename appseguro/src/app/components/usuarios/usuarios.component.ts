import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild('addPost') addBtn: ElementRef;

  constructor(private userService: UserService,public router: Router) {
    this.userService.postEdit_Observable.subscribe(res => {
      this.addBtn.nativeElement.click();
		});

   }

  ngOnInit() {
    this.getUsers();

    this.userService.postAdded_Observable.subscribe(res => {
      console.log("entro");
      this.getUsers();
    });
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(res => {
        this.userService.users = res as User[];
      });
  }

  editUser(user: User) {
    this.userService.setPostToEdit(user);
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
