import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Formulario1 } from '../models/formulario1';
import { Export1 } from '../models/export1';
import { Subject }    from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class Formulario1Service {
  selectedForm1: Formulario1;
  Forms1: Formulario1[];
  selectedExoport1: Export1;
  Export1: Export1[];
  public postAdded_Observable = new Subject();
	public postEdit_Observable = new Subject();
  public post_to_be_edited;
  public post_to_be_edited2;

  readonly URL_API = 'http://localhost:3000/api/form1';
  readonly URL_AP2 = 'http://localhost:3000/api/export1';

  constructor (private http: HttpClient){
    this.selectedForm1 = new Formulario1();
    this.selectedExoport1= new Export1();
    this.post_to_be_edited = new Formulario1();
    this.post_to_be_edited2 = new Export1();
  }

  getForms1(){
    return this.http.get(this.URL_API);
  }

  getExport1(){
    return this.http.get(this.URL_AP2);
  }

  getId(Rut: String){
    return this.http.get(this.URL_API + `/${Rut}`)
  }

  postForm(form1: Formulario1) {
    return this.http.post(this.URL_API, {
      NombrePaciente : form1.NombrePaciente,
      Rut : form1.Rut,
      Solicitud : form1.Solicitud,
      Poliza : form1.Poliza,
      Diagnostico : form1.Diagnostico,
      fechaDiagnostico : form1.fechaDiagnostico,
      Metodo : form1.Metodo,
      fechaPeso: form1.fechaPeso,
      Farmacos: form1.Farmacos,
      Tiempo: form1.Tiempo,
      Peso: form1.Peso,
      Talla: form1.Talla,
      IMC: form1.IMC,
      Tratamiento: form1.Tratamiento
    });  
  }
  
  postExport( usuario: string, date: Date, file: string, formulario: string ){
    console.log(usuario, date, file, formulario);
    return this.http.post(this.URL_AP2, {
      usuario: usuario,
      date: date,
      file: file,
      formulario: formulario
    });
  }

  putForm(form1: Formulario1) {
    return this.http.put(this.URL_API + `/${form1._id}`, {
      id: form1._id,
      NombrePaciente : form1.NombrePaciente,
      Rut : form1.Rut,
      Solicitud : form1.Solicitud,
      Poliza : form1.Poliza,
      Diagnostico : form1.Diagnostico,
      fechaDiagnostico : form1.fechaDiagnostico,
      Metodo : form1.Metodo,
      fechaPeso: form1.fechaPeso,
      Farmacos: form1.Farmacos,
      Tiempo: form1.Tiempo,
      Peso: form1.Peso,
      Talla: form1.Talla,
      IMC: form1.IMC,
      Tratamiento: form1.Tratamiento
    });
  }

  putExport(_id: string, usuario: string, date: string, file: string, formulario: string){
    return this.http.put(this.URL_AP2 + `/${_id}`, {
      usuario: usuario,
      date: date,
      file: file,
      formulario1:formulario
    });
  }

  deleteForm(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

  deleteExport(_id:string){
    return this.http.delete(this.URL_AP2 + `/${_id}`);
  }

  notifyPostEdit(){
		this.postEdit_Observable.next();
	}

	setPostToEdit(user: Formulario1){
		this.post_to_be_edited = user;
		this.notifyPostEdit();
  }
  
  setPostToEdit2(user: Export1){
		this.post_to_be_edited2 = user;
		this.notifyPostEdit();
	}

	notifyPostAddition(){
		this.postAdded_Observable.next();
	}
}
