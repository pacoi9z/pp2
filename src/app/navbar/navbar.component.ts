import { Component, Input, OnInit } from '@angular/core';
import {HelpersService} from '../helpers.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() Nom : string = '';

  
  constructor(private helpS:HelpersService) {  
  }

  ngOnInit(): void {

  }

  getPath(){
    return this.helpS.pathToImg;
  }

}
