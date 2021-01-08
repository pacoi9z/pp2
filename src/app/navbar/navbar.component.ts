import { Component, OnInit } from '@angular/core';
import { GlobalVarsService } from '../global-vars.service';
import {HelpersService} from '../helpers.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  notificationsData : any;
  
  constructor(
      public helpS:HelpersService, 
      private gVars: GlobalVarsService) {
      this.notificationsData = helpS.getClochNotifs();
  }

  ngOnInit(): void {

  }

  getPath(){
    return this.gVars.linkToPHP;
  }

  scrollToElement($element): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }


  eee() {
    document.getElementById('wrapper').classList.toggle("toggled");
  }

}
