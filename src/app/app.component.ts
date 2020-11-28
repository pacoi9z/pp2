import { Component, OnInit } from '@angular/core';
import { HelpersService } from './helpers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  tit = 'Publications';
  nomPersonne = 'Ziane Hasna';
  constructor() {
    this.tit;
  }

  
}
