import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { promise } from 'protractor';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  ME:any; 
  notifMe:any; 

  notif_Cloche = 0;
  notif_Publication=0;
  notif_Messages=0;
  notif_Dashboard=0;
  notif_Services=0;
  notif_Relations=0;
  notif_kids_space=0;
  notif_Profile=0;
  notif_Chat=0;
  dataCharged= false;

  constructor(private dataService : LoginService, private http: HttpClient ,private router:Router) {
    
    if(!this.dataService.isLoggedIn())
    {
      const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '';
      this.router.navigate([redirect]);
    }

    this.gogetMe();
    this.gogetNotifCount();
    
    setInterval(()=>{this.gogetNotifForMe();this.gogetNotifCount()},5000); 
  }

  gogetMe() {
    this.ME = this.dataService.getMe(); 
  }
  
  isLoggedIn() {
    return this.dataService.isLoggedIn();
  }

  gogetNotifForMe() {

    /*
    this.notifMe=[
    {
      idPub:"36",
      photoPub:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
      nomPub:"Belmadi Farouk",
      newLable : "a ajouter une nouvelle publication",
      timePub  : "il y'a 2 jours",
      linkTo : "publications/36"
    }, 
  ];
    */
    return new Promise(
      (resolve,reject) => {

        this.http.get(this.dataService.URL_PHP("GET_NOTIFS")).subscribe(
          (data)=> {
            this.notifMe = data;
            this.notif_Cloche = this.notifMe.length;
            console.log(data);
            resolve(data);
          },
          (err)=> {resolve(err);}
        );
      }
    );
  
  }

  gosetNofiClochVu() {
    //SET all listed notif in notifMe as VU with current timestamp
    this.http.get(this.dataService.URL_PHP("goset_NotifCloch_vu")).subscribe(
      (data) => {},
      (err) => {}
    )
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
    this.notif_Publication  = notifs[0];
    this.notif_Messages     = notifs[1];
    this.notif_Services     = notifs[2];
    this.notif_Relations    = notifs[3];
    this.notif_kids_space   = notifs[4];
    this.notif_Profile      = notifs[5];
    this.notif_Chat         = notifs[6];
    this.notif_Dashboard    = notifs[7];
  }
  
  


}
