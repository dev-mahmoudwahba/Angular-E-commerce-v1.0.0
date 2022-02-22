import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Shared Classes/user';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  _url="http://localhost:3002/register";

  register(user:User){
    return this.http.post(this._url,user)
  }

}

