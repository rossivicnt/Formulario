import {Component, Input} from '@angular/core';
import { Router } from  '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-privado-page',
  templateUrl: './privado-page.component.html',
})
export class PrivadoPageComponent{
  closeResult: string;
  public form: string;

  constructor(private modalService: NgbModal,public router: Router) {}

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
}
