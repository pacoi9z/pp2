import { Component, OnInit } from '@angular/core';
import { HelpersService } from './helpers.service';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loadingApp = true;

  constructor(
    public helpS : HelpersService, private dataService:LoginService) {
    setTimeout(()=> { this.loadingApp=false; },1000);
  }

  getPath(){
    return this.dataService.getpath();
  }

  ngOnInit() {
   
  }
   
}
