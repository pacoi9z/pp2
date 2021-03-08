import { Component, OnInit } from '@angular/core';
import {HelpersService} from '../helpers.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  notificationsData : any;

  constructor(
      public helpS:HelpersService,
      private dataService: LoginService) {
      helpS.gogetNotifForMe().then((data)=> { 
        this.notificationsData = data;
      });
      this.helpS.gogetMe();
      
  }

  ngOnInit(): void {
    
  }

  getPath(){
    return this.dataService.getpath();
  }

  scrollToElement($element): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }


  logout()
    {
    this.dataService.deleteToken();
    window.location.href = window.location.href;
    }

}
