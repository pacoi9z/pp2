import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messages = [
    {
      id:1,
      objet:'',
      content:'Bonjour je suis Jane cooper',
      datetime:'24/11/2020 21h51',
      sender_name:'Jane Cooper',
      sender_pic:'https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
    },
    {
      id:5,
      objet:'Msg',
      content:'je t\'aime 3mira',
      datetime:'20/10/2020 15h51',
      sender_name:'Islam Ziane',
      sender_pic:'https://pbs.twimg.com/profile_images/1158619084378005504/y1AKsrg-_400x400.jpg'
    },
    {
      id:4,
      objet:'Objet Nassima',
      content:'Message Nassima',
      datetime:'01/11/2020 17h21',
      sender_name:'Nassima Hadjouti',
      sender_pic:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
    },
    {
      id:3,
      objet:'Objet Imane',
      content:'Message Imane',
      datetime:'01/11/2020 17h21',
      sender_name:'Imane Hadjouti',
      sender_pic:'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
    },
    {
      id:2,
      objet:'Objet Amina',
      content:'Message Amina',
      datetime:'01/11/2020 17h21',
      sender_name:'Amina Hadjouti',
      sender_pic:'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
    }
  ]

  message_content:string = '';
  message_objet:string = '';
  message_datetime:string = '';
  message_sender_name:string ='';
  message_sender_pic:string = 'https://www.shankarainfra.com/img/avatar.png';

  constructor(private titleService:Title) {
    this.titleService.setTitle("Messages [2]");
   }

  ngOnInit(): void {

  }

  messageAt(ide:number) { 
    return this.messages.find(e=> e.id===ide )
  }

  getMsg(id:number) {
    let msg= this.messageAt(id);
    this.message_objet = msg.id+" - "+msg.objet;
    this.message_datetime = msg.datetime;
    this.message_content =  msg.content; 
    this.message_sender_name=msg.sender_name;
    this.message_sender_pic=msg.sender_pic;
    

  }

  eee() {
    document.getElementById('wrapper').classList.toggle("toggled");
  }

}
