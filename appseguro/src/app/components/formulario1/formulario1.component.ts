import { Component, OnInit } from '@angular/core';
import { Formulario1Service } from '../../services/formulario1.service';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { Formulario1 } from '../../models/formulario1';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.scss'],
  providers: [Formulario1Service]
})
export class Formulario1Component implements OnInit {

  constructor(private formService: Formulario1Service,public router: Router) { }

  ngOnInit() {
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.formService.selectedForm1 = new Formulario1();
    }
  }

  addForm(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.formService.putForm(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getForms();
          this.router.navigate(['/usuarios']);
        });
    } else {
      this.formService.postForm(form.value)
      .subscribe(res => {
        this.getForms();
        this.resetForm(form);
        this.router.navigate(['/usuarios']);
      });
    }
    
  }

  getForms() {
    this.formService.getForms1()
      .subscribe(res => {
        this.formService.Forms1 = res as Formulario1[];
      });
  }

}
