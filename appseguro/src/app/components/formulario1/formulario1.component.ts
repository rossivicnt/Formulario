import { Component, OnInit } from '@angular/core';
import { Formulario1Service } from '../../services/formulario1.service';
import { NgForm } from '@angular/forms';
import { Formulario1 } from '../../models/formulario1';
import { Router } from  '@angular/router';
import { Export1 } from '../../models/export1';

@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.scss'],
  providers: [Formulario1Service]
})
export class Formulario1Component implements OnInit {
  public papers: Formulario1 = new Formulario1();
  public papers2: Export1 = new Export1();
  public listPeriodico: Formulario1[];
  public list: Export1[];

  constructor(private formService: Formulario1Service,public router: Router) { }

  ngOnInit() {
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.formService.selectedForm1 = new Formulario1();
      this.formService.selectedExoport1= new Export1();
    }
  }

  addForm(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.formService.putForm(form.value)
        .subscribe(res => {
          this.formService.putExport(form.value)
          .subscribe(res => {
            this.resetForm(form);
            this.getForms();
            this.router.navigate(['/privado']);
          });
        });
    } else {
      this.formService.postForm(form.value)
      .subscribe(res => {
        this.formService.postExport(form.value)
        .subscribe(res => {
          this.getForms();
          this.resetForm(form);
          this.router.navigate(['/privado']);
        });
      });
    }
    
  }

  getForms() {
    this.formService.getForms1()
    .subscribe((res:any) => {
      console.log(res);
      this.listPeriodico = res;
    });
  }

  getExport(){
    this.formService.getExport1()
    .subscribe((res:any) => {
      console.log(res);
      this.list = res;
    });
  }

}
