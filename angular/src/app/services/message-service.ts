import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  constructor(private http:Http) { }

getMessage(id){
  return this.http.get("message/"+id).map(res=> res.json());
    
}
getMessagesByUser(id){
  return this.http.get("message/user/"+id).map(res=>res.json());
}
getMessages(){
  return this.http.get("message").map(res => res.json());
}

addMessage(msg){
  return this.http.post("message",msg).map(res => res.json());
}


deleteMessage(id){
  return this.http.delete("message/"+id).map(res => res.json());
}

updateMessage(id,msg){
  return this.http.put("message/"+id,msg).map(res => res.json());
}
}
