import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  ME = {
    nom : "Ziane",
    prenom : "Roufaida",
    username: "zi.roufaida",
    alias : "Hasna",
    type : "P",
    tel:"0668212222",
    email : "ziane.ra@fakemail.com",
    photo : "https://scontent-mrs2-1.cdninstagram.com/v/t51.2885-15/e35/51018454_836621796669873_8611465961240760159_n.jpg?_nc_ht=scontent-mrs2-1.cdninstagram.com&_nc_cat=109&_nc_ohc=jin3B_TGlJwAX93FHGB&tp=1&oh=a7c60f5aff444da6c2774d9e228499b9&oe=5FFEC8B3"
  }

  pathToImg = 'http://localhost/DesignEcole';

  notif_Cloche = '5'
  notif_Publication = '9+'
  notif_Messages = '2'
  notif_Services = '0'
  notif_Relations = '0'
  notif_Disabled = '0'
  notif_Profile = '1';

  notifications = [{
    
    idPub:"21P",
    photoPub:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    nomPub:"Ziane Raiss",
    newLable : "a ajouter une nouvelle publication",
    timePub  : "il y'a 1 semaine",
    linkTo : "publications/21P"

  },
  {
    
    idPub:"21P",
    photoPub:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    nomPub:"Ziane Raiss",
    newLable : "Vous a envoyé un nouveau message",
    timePub  : "il y'a 1 jour",
    linkTo : "messages/21P"

  },
  {
    idPub:"24P",
    photoPub:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    nomPub:"Bechkoune Hanane",
    newLable : "Nouvelle Publication",
    timePub  : "a 15h20",
    linkTo : "publications/24P"
  },
  {
    idPub:"36P",
    photoPub:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    nomPub:"Belmadi Farouk",
    newLable : "a ajouter une nouvelle publication",
    timePub  : "il y'a 2 jours",
    linkTo : "publications/36P"
  }, 
];


  constructor() { }

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
