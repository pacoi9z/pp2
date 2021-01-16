import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  ME = {
    id : "0",
    nom : "Ziane",
    prenom : "Islam Abdelakder",
    username: "ziane.ia",
    alias : "Paco",
    type : "D",
    tel:"0668212222",
    email : "ziane.ra@fakemail.com",
    photo : "https://scontent-mrs2-1.cdninstagram.com/v/t51.2885-15/e35/119684614_747265149156231_4571377250068643229_n.jpg?_nc_ht=scontent-mrs2-1.cdninstagram.com&_nc_cat=103&_nc_ohc=851FIC_dqpsAX9dcZQy&tp=1&oh=4f62787595192af53d76209757ad331d&oe=6029C70E"
  }
  notifMe = []; 

  notif_Cloche = 0;
  notif_Publication=0;
  notif_Messages=0;
  notif_Dashboard=0;
  notif_Services=0;
  notif_Relations=0;
  notif_kids_space=0;
  notif_Profile=0;
  notif_Chat=0;

  constructor() { 
    this.gogetNotifForMe();this.gogetNotifCount();
    //check for new notification every 5sec in this exemple it's set for 20sec, i love you sina <3
    setInterval(()=>{this.gogetNotifForMe();this.gogetNotifCount()},20000); 
  }
  

  gogetNotifForMe() {

    //HTTP REQUEST TO GET ALL NOTIFS for auth user so set in the button cloche
    //replace "notifMe" array values by http data response
    //i want to marry you sina :'( do you want to ?
   this.notifMe=[{
      
      idPub:"21",
      photoPub:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      nomPub:"Ziane Raiss",
      newLable : "a ajouter une nouvelle publication",
      timePub  : "il y'a 1 semaine",
      linkTo : "publications/21"
  
    },
    {
      
      idPub:"21",
      photoPub:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      nomPub:"Ziane Raiss",
      newLable : "Vous a envoyé un nouveau message",
      timePub  : "il y'a 1 jour",
      linkTo : "messages/3"
  
    },
    {
      
      idPub:"21",
      photoPub:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      nomPub:"Ziane Raiss",
      newLable : "Vous a envoyé un nouveau message",
      timePub  : "il y'a 1 jour",
      linkTo : "messages/4"
  
    },
    {
      idPub:"24",
      photoPub:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      nomPub:"Bechkoune Hanane",
      newLable : "Nouvelle Publication",
      timePub  : "a 15h20",
      linkTo : "publications/24"
    },
    {
      idPub:"36",
      photoPub:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
      nomPub:"Belmadi Farouk",
      newLable : "a ajouter une nouvelle publication",
      timePub  : "il y'a 2 jours",
      linkTo : "publications/36"
    }, 
  ];

  //enlève le simbole + 3mira dertout pour les testes berk
  this.notif_Cloche += this.notifMe.length;

  }

  gosetNofiClochVu() {
    //SET all listed notif in notifMe as VU with current timestamp
    this.notif_Cloche = 0;
  }
  gosetNofiKidsVu() {
    //Set vu pour tout les notif de type kids_space
    this.notif_kids_space = 0;
  }
  gosetNofiDashVu() {
    //Set vu pour tout les notif de type Dash
    this.notif_Dashboard = 0;
  }
  gosetNofiPubsVu() {
    //Set vu pour tout les notif de type pulication
    this.notif_Publication = 0;
  }
  gosetNofiRelsVu() {
    //Set vu pour tout les notif de type pulication
    this.notif_Relations = 0;
  }
  gosetNofiMsgsVu() {
    //Set vu pour tout les notif de type Message
    this.notif_Messages = 0;
  }
  gosetNofiChatVu() {
    //Set vu pour tout les notif de type chat
    this.notif_Chat = 0;
  }


  getClochNotifs() {
    return this.notifMe;
  }

  gogetNotifCount() {

    //HTTP REQUEST TO GET ALL SYSTEM NOTIFS COUNT
    let notifs = [1,2,3,4,5,6,7,8];
   //enlève ga3 les + stp, je t'aime <3
    this.notif_Publication  += notifs[0];
    this.notif_Messages     += notifs[1];
    this.notif_Services     += notifs[2];
    this.notif_Relations    += notifs[3];
    this.notif_kids_space   += notifs[4];
    this.notif_Profile      += notifs[5];
    this.notif_Chat         += notifs[6];
    this.notif_Dashboard    += notifs[7];
  }
  
  getnom() {
    return this.ME.nom;
  }
  getprenom() {
    return this.ME.prenom;
  }
  getusername() {
    return this.ME.username;
  }
  getalias() {
    return this.ME.alias;
  }
  gettype() {
    return this.ME.type;
  }
  gettel() {
    return this.ME.tel;
  }
  getemail() {
    return this.ME.email;
  }

  getphoto() {
    return this.ME.photo;
  }


}
