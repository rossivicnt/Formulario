import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Subject }    from 'rxjs/Subject';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User;
  users: User[];
  public postAdded_Observable = new Subject();
	public postEdit_Observable = new Subject();
	public post_to_be_edited;

  readonly URL_API = 'http://localhost:3000/api/users';

  constructor (private http: HttpClient){
   this.selectedUser = new User();
    this.post_to_be_edited = new User();
  }

  getUsers(){
    return this.http.get(this.URL_API);
  }

  postUser(user: User) {
    return this.http.post(this.URL_API, user);
  }

  putUser(user: User) {
    return this.http.put(this.URL_API + `/${user._id}`, user);
  }

  deleteUser(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
  
  notifyPostEdit(){
		this.postEdit_Observable.next();
	}

	setPostToEdit(user: User){
		this.post_to_be_edited = user;
		this.notifyPostEdit();
	}

	notifyPostAddition(){
		this.postAdded_Observable.next();
	}
}
