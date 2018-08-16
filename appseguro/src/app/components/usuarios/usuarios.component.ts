import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { Router } from  '@angular/router';

declare var $:any;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  providers: [UserService]
})

export class UsuariosComponent implements OnInit {

 public papers: User = new User();
  public listPeriodico: User[];

  constructor(private userService: UserService,public router: Router) {

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
      .subscribe((res:any) => {
        console.log(res);
        this.listPeriodico = res;
      });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.userService.selectedUser = new User();
    }
  }

  addUser(form?: NgForm) {
    console.log(form.value);
    if(form.value){
      if(form.value._id){
        this.userService.putUser(form.value).subscribe(res =>{
        this.userService.notifyPostAddition();
        });
      } else {
        this.userService.postUser(form.value).subscribe(res =>{
        this.userService.notifyPostAddition();
        });
      }
    } else {
      alert('Valores requeridos');
    }
  }

  editUser(user: User) {
    this.papers = user;
    this.abrirModal();
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
  
  abrirModal(){
    $("#modalEdit").modal();
  }
}
