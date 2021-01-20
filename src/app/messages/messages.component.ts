import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {Title} from "@angular/platform-browser";
import { ActivatedRoute } from '@angular/router';
import { HelpersService } from '../helpers.service';
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  
  
  startMsg=0;
  endMsg=2;
  frmG : FormGroup;
  MessagesData;
  prio;
  loadingSpiner=true;
  errEnvoiMsg="";
  msgSuccess="";
  message_content:string = '';
  message_objet:string = '';
  message_id_pub:string="";
  message_datetime:string = '';
  message_sender_name:string ='';
  message_sender_pic:string = 'https://www.shankarainfra.com/img/avatar.png';

  constructor(public helpS: HelpersService,
              private msgS:MessagesService,
              private datePipe: DatePipe,
              private route:ActivatedRoute, 
              private titleService:Title ) {
    if(helpS.notif_Messages != 0)  
    this.titleService.setTitle(" ["+helpS.notif_Messages+"] Messages - El Razi School");
    else this.titleService.setTitle("Messages - El Razi School")

    this.frmG = new FormGroup({
      objet_Message: new FormControl(),
      contact_Message: new FormControl(),
      Text_Message: new FormControl(),
   });
    this.getMessagesData();
                
   }

  ngOnInit(): void {

  }

  refreshMessagesList() {
    this.MessagesData = this.msgS.messages.slice(this.startMsg,this.endMsg)
  }

  end9elMenData() {
    return this.endMsg<this.msgS.messages.length;
  }

  showMore() {
    this.startMsg;
    if(this.endMsg<this.msgS.messages.length)
    /// LES MESSAGES YZIDOU B'ZOUDJ
    this.endMsg+=2;
    this.refreshMessagesList();
  }

  

  getMessagesData() { 
    this.msgS.gogetMsgs().then((e)=>{
      this.loadingSpiner=false;
      this.MessagesData = this.msgS.messages.slice(this.startMsg,this.endMsg);
      //lire l'id trouvé dans l'url
      this.route.params.subscribe(e => {
        this.prio = e.id;
        this.getMsg(this.prio);
      });
    })
  }

  getMsg(id:number) {
    
    let msg = this.msgS.getData(id);
    if(msg!=undefined) {
      this.message_id_pub = msg.id_pub;
      this.message_objet = msg.objet;
      this.message_datetime = msg.datetime;
      this.message_content =  msg.content; 
      this.message_sender_name=msg.sender_name;
      this.message_sender_pic=msg.sender_pic;
    }

    this.sendVu(id);

  }

  eee() {
    document.getElementById('wrapper2').classList.toggle("toggled");
  }

  sendVu (idMsg){
    let myObj = this.msgS.getData(idMsg)
    if(myObj!=null) {
      //
      myObj.vuMsg ="aujourd'huit à "+this.datePipe.transform(new Date(),"hh:mm");
      this.msgS.SEND_HTTP_VU(idMsg);
    }
  }

  sendMsg() {
    this.errEnvoiMsg ="";
    this.msgSuccess ="";
    console.log("Msg : "+this.frmG.get('objet_Message').value);
    console.log("Msg : "+this.frmG.get('contact_Message').value);
    console.log("Msg : "+this.frmG.get('Text_Message').value);
    
    if(this.errEnvoiMsg!="")
      this.msgSuccess="Le message a bien été envoyé à "+this.frmG.get('contact_Message').value;
    this.errEnvoiMsg="Erreur : "+this.msgS.goSetMsg(this.frmG.get('contact_Message').value,this.frmG.get('objet_Message').value,this.frmG.get('Text_Message').value).then(e=> { return e.length; });
    

  }

  

}
