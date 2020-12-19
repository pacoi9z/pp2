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
    type : "Parent",
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
