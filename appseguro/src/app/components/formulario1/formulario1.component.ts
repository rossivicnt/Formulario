import { Component, OnInit } from '@angular/core';
import { Formulario1Service } from '../../services/formulario1.service';
import { NgForm } from '@angular/forms';
import { Formulario1 } from '../../models/formulario1';
import { Router, ActivatedRoute } from  '@angular/router';
import { Export1 } from '../../models/export1';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import { UserService } from '../../services/user.service';

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
  public today: Date = new Date();
  id: string;
  username:string;
  mostrar: boolean;
  public _id: string;

  constructor(private formService: Formulario1Service,public router: Router,public user: UserService,
    private route: ActivatedRoute,) { 
    this.user.user()
    .subscribe(
      data=>this.addName(data),
      error=>this.router.navigate(['/login'])
    ) 
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params['id']!=null){
          this._id = params['id']; 
      }
   });
   console.log(this._id);
   this.getForm(this._id);
  }


  addName(data){
    console.log(data._id);
    this.username = data._id;
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.formService.selectedForm1 = new Formulario1();
      this.formService.selectedExoport1= new Export1();
    }
  }

  addForm(form?: NgForm) {
    if(form.value._id) {
      this.formService.putForm(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getForms();
          this.router.navigate(['/privado']);
        });
    } else {
     this.formService.postForm(form.value)
        .subscribe(res => {
          this.formService.getId(form.value.Rut).subscribe((res:any) => {
            console.log(res[0]._id);
            this.id = res[0]._id;
            this.formService.postExport(this.username, this.today ,"Informe medico tratante obesidad" , this.id)
              .subscribe(res => {
                this.getForms();
                this.onClick();
                this.resetForm(form);
                this.router.navigate(['/privado']);
            });
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

  getForm(_id:string){
    this.formService.getForm1(_id)
    .subscribe((res:any) => {
      console.log(res);
      this.papers = res;
    });
  }

  getExport(){
    this.formService.getExport1(this.username)
    .subscribe((res:any) => {
      console.log(res);
      this.list = res;
    });
  }

  public onClick(){
    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 240; 
      var pageHeight = 299;  
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 5;
      pdf.addImage(contentDataURL, 'PNG', 5, position, imgWidth, imgHeight)
      pdf.save('MYPdf.pdf'); // Generated PDF 
    });
  }

}
