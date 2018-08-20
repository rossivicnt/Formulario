import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Formulario1Service } from '../../services/formulario1.service';
import { Formulario1 } from '../../models/formulario1';

@Component({
  selector: 'app-privado-page',
  templateUrl: './privado-page.component.html',
  providers: [Formulario1Service]
})
export class PrivadoPageComponent implements OnInit{
  closeResult: string;
  public form: string;
  public listForm: Formulario1[];


  constructor(private modalService: NgbModal,public router: Router,
    private form1Service:Formulario1Service) {}

    ngOnInit() {
      this.getForms();
    }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  OnSubmitFormulario(){
    alert("entro");
    if(this.form=='Formulario1'){
      this.router.navigate(['/formulario1']);
    }
  }

  getForms(){
    this.form1Service.getExport1()
    .subscribe((res:any) => {
      console.log(res);
      this.listForm = res;
    });
  }
}
