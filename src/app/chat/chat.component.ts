import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HelpersService } from '../helpers.service';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  chatsData;
  UsersData;
  nom_prenom_selected=null
  selectedUser=null;
  isopenchat=false;
  loadingUsers=true;
  loadingChats=true;
  @ViewChild('chat_input') fondovalor:ElementRef;

  constructor(public helpS:HelpersService, private chatS:ChatService) {
    
    setInterval( ()=> {if(this.isopenchat) {   this.getUsers();   }  },5000); 
    
  }

  ngOnInit(): void {
  }

  getChats() {
    this.chatS.gogetChats(this.selectedUser).then(() => {
      this.chatsData = this.chatS.chats;
      this.loadingChats=false;
    });
  }

  getUsers() {
    this.chatS.gogetUsers().then(() => {
      this.UsersData = this.chatS.users;
      if(this.selectedUser==null)
      {  
        this.selectThisUser(this.chatS.users[0].id_user,this.chatS.users[0].nom_prenom_user);
        this.loadingUsers=false; 
      }
      
    });
  }


  selectThisUser(id,nom) {
    this.loadingChats=true;
    this.selectedUser = id;
    this.nom_prenom_selected=nom;
    this.getChats();
    
  }

  openchat() {
    this.isopenchat=!this.isopenchat;
  }

  send_chat() {
    let val = this.fondovalor.nativeElement.value
    this.chatS.goSendChat(val,this.selectedUser)
  }

  


}
