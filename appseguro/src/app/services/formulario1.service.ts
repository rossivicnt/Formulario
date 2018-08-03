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
  public postAdded_Observable = new Subject();
	public postEdit_Observable = new Subject();
	public post_to_be_edited;

  readonly URL_API = 'http://localhost:3000/api/form1';
  readonly URL_AP2 = 'http://localhost:3000/api/export1';

  constructor (private http: HttpClient){
    this.selectedForm1 = new Formulario1();
    this.post_to_be_edited = new Formulario1();
  }

  getForms1(){
    return this.http.get(this.URL_API);
  }

  getExport1(){
    return this.http.get(this.URL_AP2);
  }

  postForm(form1: Formulario1) {
    return this.http.post(this.URL_API, form1);  
  }
  
  postExport( export1: Export1){
    return this.http.post(this.URL_AP2, export1);
  }

  putForm(form1: Formulario1) {
    return this.http.put(this.URL_API + `/${form1._id}`, form1);
  }

  putExport(export1: Export1){
    return this.http.put(this.URL_AP2 + `/${export1._id}`, export1);
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

	notifyPostAddition(){
		this.postAdded_Observable.next();
	}
}
