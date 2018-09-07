import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Subject }    from 'rxjs';


@Injectable()
export class AuthService {
  selectedUser : User;
  User : User[];
  public postAdded_Observable = new Subject();
	public postEdit_Observable = new Subject();
	public post_to_be_edited;

  readonly URL_API = 'http://localhost:3000/api/users';

  constructor( private http:HttpClient) { 
    this.selectedUser = new User();
    this.post_to_be_edited = new User();
  }

  getUser() {
    return this.http.get('http://localhost:3000/api/users/users');
  }

  putUser(User: User) {
    return this.http.put(this.URL_API + `/${User._id}`, User);
  }

  deleteUser(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

  notifyPostEdit(User){
		this.postEdit_Observable.next(User);
	}

	setPostToEdit(user: User){
    this.post_to_be_edited = user;
    console.log(this.post_to_be_edited);

		this.notifyPostEdit(this.post_to_be_edited);
	}

	notifyPostAddition(){
		this.postAdded_Observable.next();
  }
  
}
