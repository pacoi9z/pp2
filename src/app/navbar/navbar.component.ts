import { Component, Input, OnInit } from '@angular/core';
import {HelpersService} from '../helpers.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  

  
  constructor(public helpS:HelpersService) {  
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
