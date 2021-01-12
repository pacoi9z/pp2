import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  chats;
  users;

  constructor(private http:HttpClient) { 

  }

  gogetChats(id) {
  
    return new Promise(
      (resolve,reject) => {
          //'http://127.0.0.1/DesignEcole/datachat.php'
          //'http://localhost:3000/chats'+id
          this.http.get('http://localhost:3000/chats'+id).subscribe(
              (data:any) => {
                this.chats = data;
                resolve(this.chats);
              },
              error => {
                console.log(error);
                resolve(undefined);
              }
            )      
      }
    );
  
  }

  gogetUsers = () => {
  
    return new Promise(
      (resolve,reject) => {
  
          this.http.get('http://localhost:3000/DirectionUsers').subscribe(
              (data:any) => {
                this.users = data;
                resolve(this.users);
              },
              error => {
                console.log(error);
                resolve(undefined);
              }
            )      
      }
    );
  
  }

  goSendChat(val, id) {
    //HTTP REQEST TO ADD CHAT MSG
    
    this.gogetChats(id)
    /*
    this.chats.push({
      message_chat:val,
      id_chat:-1,
      date_heur_chat:"2021-01-08 17:44:42",
      notif_chat:null,
      vu_chat:null,
      id_sender_chat:0
    })*/
  }

}
