import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from  '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Formulario1Service } from '../../services/formulario1.service';
import { Formulario1 } from '../../models/formulario1';
import { Export1 } from '../../models/export1';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-privado-page',
  templateUrl: './privado-page.component.html',
  providers: [Formulario1Service]
})
export class PrivadoPageComponent implements OnInit{
  closeResult: string;
  public form: string;
  public listForm: Formulario1[];
  username:string='';

  constructor(private modalService: NgbModal,public _router: Router,
    private form1Service:Formulario1Service,private _user: UserService,private route: ActivatedRoute) {
      this._user.user()
    .subscribe(
      data=>this.addName(data),
      error=>this._router.navigate(['/login'])
    ) 
    }

    ngOnInit() {
      this.getForms();
    }

    addName(data){
      this.username = data[0]._id;
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
      this._router.navigate(['/formulario1']);
    }
  }

  getForms(){
    this.form1Service.getExport1(this.username)
    .subscribe((res:any) => {
      console.log(res);
      this.listForm = res;
    });
  }

  deleteUser(_id: string,formulario:string) {
    if(confirm('Are you sure you want to delete it?')) {
      this.form1Service.deleteForm(formulario)
        .subscribe(res => {
          this.form1Service.deleteExport(_id)
            .subscribe(res => {
              this.getForms();
            });
        });
    }
  }

  editUser(user: Export1) {
    console.log("click en editar");
    if (user.file=='Informe medico tratante obesidad'){
      this._router.navigate(['/formulario1', user.formulario]);
    }
  }
  
}
