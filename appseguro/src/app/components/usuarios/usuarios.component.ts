import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
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
  public listUser: User[];
  username:String='';

  constructor(private _user: UserService, private auth: AuthService,public _router: Router) { 
    this._user.user()
    .subscribe(
      data=>this.addName(data),
      error=>this._router.navigate(['/login'])
    ) 
  }

  ngOnInit() {
    this.getUser();

    this.auth.postAdded_Observable.subscribe(res => {
      this.getUser();
    });
  }

  addName(data){
    this.username = data.username;
  }

  getUser() {
    this.auth.getUser()
      .subscribe((res:any) => {
        console.log(res);
        this.listUser = res;
      });
  }

  editUser(user: User) {
    console.log("click en editar")
    this.papers = user;
    this.abrirModal();
    this.auth.setPostToEdit(user);
  }
  
  addUser(form?: NgForm) {
    if(form.value){
      if(form.value._id){
        this.auth.putUser(form.value).subscribe(res =>{
          this.auth.notifyPostAddition();
          $("#modalEdit").modal('hide');
        });
      } else {
        this._user.register(form.value).subscribe(res =>{
        this.auth.notifyPostAddition();
        $("#modalEdit").modal('hide');
        });
      }
    } else {
      alert('Valores requeridos');
    }
  }
  
  
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.auth.selectedUser = new User();
    }
  }
  
  newUser(){
    this.papers = new User();
    this.abrirModal();
  }
  
  deleteUser(_id: string) {
    if(confirm('Are you sure you want to delete it?')) {
      this.auth.deleteUser(_id)
        .subscribe(res => {
          this.getUser();
        });
    }
  }
  
    abrirModal(){
      $("#modalEdit").modal();
    }
}
