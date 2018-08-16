import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('closeBtn') closeBtn: ElementRef;
  public post : User;

  constructor(private userService: UserService,public router: Router) { 
    this.post = new User();
  }

  ngOnInit() {
    this.userService.postEdit_Observable.subscribe(res => {
      this.post = this.userService.post_to_be_edited;
      console.log('post is ', this.post._id);
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
          this.closeBtn.nativeElement.click();
          this.userService.notifyPostAddition();
        });
      } else {
        this.userService.postUser(form.value).subscribe(res =>{
          this.closeBtn.nativeElement.click();
          this.userService.notifyPostAddition();
        });
      }
    } else {
      alert('Valores requeridos');
    }
  }

}
