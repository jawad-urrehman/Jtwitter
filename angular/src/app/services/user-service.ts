import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:Http) { }
  
  loggedIn(){
    return tokenNotExpired()
    
  }
    

  loginUser(user){
    return this.http.post("user/login",user).map(res => res.json())
  }

getUser(){
  return this.http.get("user").map(res => res.json());
}

getoneUser(id){
  return this.http.get("user/"+id).map(res => res.json());
}

addUser(user){
  return this.http.post("user",user).map(res => res.json());
}


deleteUser(id){
  return this.http.delete("user/"+id).map(res => res.json());
}

updateUser(id,user){
  return this.http.put("user/"+id,user).map(res => res.json());
}
}
