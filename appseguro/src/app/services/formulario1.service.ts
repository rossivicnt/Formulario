import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Formulario1 } from '../models/formulario1';

@Injectable({
  providedIn: 'root'
})
export class Formulario1Service {
  selectedForm1: Formulario1;
  Forms1: Formulario1[];

  readonly URL_API = 'http://localhost:3000/api/form1';

  constructor (private http: HttpClient){
    this.selectedForm1 = new Formulario1();
  }

  getForms1(){
    return this.http.get(this.URL_API);
  }

  postForm(form1: Formulario1) {
    return this.http.post(this.URL_API, form1);
  }

  putForm(form1: Formulario1) {
    return this.http.put(this.URL_API + `/${form1._id}`, form1);
  }

  deleteForm(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
