import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalVarsService } from '../global-vars.service';

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
           this.http.get('http://localhost:3000/MsgData').subscribe(
            (data:any) => {
              this.messages = data;
              this.dataCharged=true;
              resolve(this.messages);
            },
            error => {
              console.log(error);
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
              private gVar : GlobalVarsService) { 
    
  }


  SEND_HTTP_VU(idMsg) {
    //SEND HTTP REQUEST POST TO ADD VU TO A THIS MESSAGE
  }


  async goSetMsg(contact,objet,Text) {
    //http fonction to send the message to destination
    let errMsg="";
    this.http.get("http://localhost:3000/aeaze?c="+contact+"&o="+objet+"&t="+Text).subscribe(
      (data:any)=>{ errMsg = " Test : "+data; },
      (erro)=>{ console.log("eerr : "+erro.status)   
      errMsg = "Ooops! Le message n'a pas été envoyé.. "+erro.error; 
    });


    return await errMsg;
  }


}
