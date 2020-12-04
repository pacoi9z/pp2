import { Component, OnInit } from '@angular/core';
import { HelpersService } from './helpers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  tit = 'Publications';
  nomPersonne = 'Ziane Hasna';
  constructor() {
    this.tit;
  }

  ngOnInit() {
    window.addEventListener('scroll', this.scrollEvent, true);
  }
  
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollEvent, true);
  }
   
  scrollEvent = (event): void => {
    const scrollTopVal = event.target.scrollingElement.scrollTop;
    this.putMenu();
  }
  
  putMenu() {
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    var el = document.documentElement;
  
    if(el.scrollTop>=20 && el.scrollTop<=120){ 
      document.getElementById("putMenuBtn").style.display="";
      document.getElementById("putMenuBtn").style.left=(-100+el.scrollTop)+"px"; }
  
    else if(el.scrollTop<20) { 
      document.getElementById("putMenuBtn").style.display="none";
      document.getElementById("putMenuBtn").style.width="";
      
      }
    else { 
      document.getElementById("putMenuBtn").style.display="";
      document.getElementById("putMenuBtn").style.left=20+"px"; }
    //get Scroll Position
    document.getElementById('wrapper').classList.toggle("toggled",false);
   
  }
}
