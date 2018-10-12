import { Component, OnInit } from '@angular/core';
import { Formulario3Service } from '../../services/formulario3.service';
import { NgForm } from '@angular/forms';
import { Formulario3 } from '../../models/formulario3';
import { Router, ActivatedRoute } from  '@angular/router';
import { Export1 } from '../../models/export1';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrls: ['./formulario3.component.scss']
})
export class Formulario3Component implements OnInit {

  public papers: Formulario3 = new Formulario3();
  public papers2: Export1 = new Export1();
  public listPeriodico: Formulario3[];
  public list: Export1[];
  public today: Date = new Date();
  id: string;
  username:string;
  mostrar: boolean;
  public _id: string;

  constructor(private formService: Formulario3Service,public router: Router,public user: UserService,
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
   this.getForm(this._id);
  }

  ver(){
    if(this.papers.inicial== false){
      this.papers.incorporacion= false;
      this.papers.modificacion=false;
    }
    if(this.papers.incorporacion== false){
      this.papers.inicial= false;
      this.papers.modificacion=false;
    }
    if(this.papers.modificacion== false){
      this.papers.incorporacion= false;
      this.papers.inicial=false;
    }
  }

  ver3(){
    if(this.papers.ckSi1 == false){
      this.papers.ckNo1= false;
    }
    if(this.papers.ckNo1== false){
      this.papers.ckSi1= false;
    }
  }

  ver2(){
    if(this.papers.ckSi2== false){
      this.papers.ckNo2= false;
    }
    if(this.papers.ckNo2== false){
      this.papers.ckSi2= false;
    }
  }

  ver4(){
    if(this.papers.ckSi3== false){
      this.papers.ckNo3= false;
    }
    if(this.papers.ckNo3== false){
      this.papers.ckSi3= false;
    }
  }

  ver5(){
    if(this.papers.ckSi4== false){
      this.papers.ckNo4= false;
    }
    if(this.papers.ckNo4== false){
      this.papers.ckSi4= false;
    }
  }
  
  ver6(){
    if(this.papers.ckPolizaVida== false){
      this.papers.ckPoliza= false;
    }
    if(this.papers.ckPoliza== false){
      this.papers.ckPolizaVida= false;
    }
  }

  addName(data){
    console.log(data._id);
    this.username = data._id;
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.formService.selectedForm1 = new Formulario3();
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
          this.onClick();
          this.formService.getId(form.value.Rut).subscribe((res:any) => {
            this.id = res[0]._id;
            this.formService.postExport(this.username, this.today ,"SIncorporacionVidaySaludColectivos(PlansincoberturadePreexistencias)" , this.id)
              .subscribe(res => {
                this.getForms();
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
    var img1= '';
    var img2= '';
    var img3= '';
    var img4= '';
    var pdf= new jsPDF('p', 'mm', 'a4');
    html2canvas(document.querySelector("#contentToConvert")).then(canvas=>{
      img1  = canvas.toDataURL('image/png');
      var imgHeight = canvas.height * 210 / canvas.width;
      console.log(imgHeight);
      html2canvas(document.querySelector("#contentToConvert2")).then(canvas=>{
        img2= canvas.toDataURL('image/png');
        var imgHeight2 = canvas.height * 210 / canvas.width;
        console.log(imgHeight2);
        html2canvas(document.querySelector("#contentToConvert3")).then(canvas=>{
          img3= canvas.toDataURL('image/png');
          var imgHeight3 = canvas.height * 210 / canvas.width;
          console.log(imgHeight3);
          html2canvas(document.querySelector("#contentToConvert4")).then(canvas=>{
            img4= canvas.toDataURL('image/png');
            var imgHeight4 = canvas.height * 210 / canvas.width;
            console.log(imgHeight4);
            pdf.addImage(img1, 'PNG',10, 5, 240, imgHeight);
            pdf.addPage();
            pdf.addImage(img2, 'PNG',10,5,240,imgHeight2);
            pdf.addPage();
            pdf.addImage(img3, 'PNG',10,5,240,imgHeight3);
            pdf.addPage();
            pdf.addImage(img4, 'PNG',10,5,240,imgHeight4);
            pdf.save('SIncorporacionVidaySaludColectivos(PlansincoberturadePreexistencias).pdf');
          });
        });
      });
    });
    /*var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 240; 
      var pageHeight = 500;  
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 5;
      pdf.addImage(contentDataURL, 'PNG', 5, position, imgWidth, 299);
      heightLeft = -pageHeight;

          while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(contentDataURL, 'PNG', 5, position, imgWidth, 299);
            heightLeft -= pageHeight;
            console.log(heightLeft);
          }
      pdf.save('SIncorporacionVidaySaludColectivos(PlansincoberturadePreexistencias).pdf'); // Generated PDF 
    });*/
  }

}
