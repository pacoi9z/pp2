import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages;
  dataCharged= false;

  gogetMsgs() {
    return new Promise(
      (resolve,reject) => {
          //
          //REQ HTTP POUR AVOIR LES MESSAGES RECU DU USER AUTHENTIFIER, ORDRED BY NEWEST FIRST
          //c bon dertha 3mira hnaya n'har hssalt m3a header ta3 apach ou weritlek l'erreur ou mahabitch twerihali hhhhhh hmara :p
          //hadi bedli fiha ghir link ta3ek 
          //this.http.get(this.gVar.linkToPHP+'/dataMessage.php').subscribe(
           this.http.get(this.dataService.URL_PHP("GET_MSGDATA")).subscribe(
            (data:any) => {
              this.messages = data;
              this.dataCharged=true;
              resolve(this.messages);
            },
            error => {
             
              resolve(undefined);
            }
          ) 
      }
    );
  
  }

  getData(id) {
    if(this.dataCharged)
      return this.messages.find(e => e.id==id);
    else return null;
  }

  constructor(private http:HttpClient, 
    private dataService:LoginService) { 
    
  }


  SEND_HTTP_VU(idMsg) {
    //SEND HTTP REQUEST POST TO ADD VU TO A THIS MESSAGE
  }


  async goSetMsg(id_recepteur,objet_message,text_message) {
    //http fonction to send the message to destination
    let errMsg="";
    return new Promise(
      (resolve,reject) => {
        this.http.post<string>(this.dataService.URL_PHP("INSERT_messages") , {id_recepteur,objet_message,text_message}).subscribe(
          (data)=>{ errMsg = data; resolve(errMsg); },
          (erro)=>{ errMsg = "Ooops! Le message n'a pas été envoyé.. "; reject(errMsg);
        });
      }
    );

    
    //return await errMsg;
  
  }


}
