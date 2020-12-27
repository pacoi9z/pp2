import { Component, OnInit } from '@angular/core';
import {HelpersService} from '../helpers.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  notificationsData : any;
  
  constructor(public helpS:HelpersService) {
      this.notificationsData = helpS.notifications;
  }

  ngOnInit(): void {

  }

  getPath(){
    return this.helpS.pathToImg;
  }

  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }


  eee() {
    document.getElementById('wrapper').classList.toggle("toggled");
  }

}
