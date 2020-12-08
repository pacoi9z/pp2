import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  pathToImg = 'http://localhost/DesignEcole';

  notif_Cloche = '5'
  notif_Publication = '9+'
  notif_Messages = '2'
  notif_Services = '0'
  notif_Relations = '0'
  notif_Disabled = '0'
  notif_Profile = '1';
  constructor() { }


  
}
