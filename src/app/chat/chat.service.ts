import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  chats;
  users;

  constructor(private http:HttpClient,private dataService:LoginService) { 

  }

  gogetChats(id) {
  
    return new Promise(
      (resolve,reject) => {
          this.http.get(this.dataService.URL_PHP("GET_CHATSDATA")).subscribe(
              (data:any) => {
                this.chats = data;
                console.log(JSON.stringify(data));
                resolve(this.chats);
                
              },
              error => {
                console.log(JSON.stringify(error));
                resolve(undefined);
              }
            )      
      }
    );
  
  }

  gogetUsers = () => {
  
    return new Promise(
      (resolve,reject) => {
  
          this.http.get(this.dataService.URL_PHP("GET_DIRECTIONUSERS")).subscribe(
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
