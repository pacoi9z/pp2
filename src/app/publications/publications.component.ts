import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Title} from '@angular/platform-browser';
import { HelpersService } from '../helpers.service';
@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {
  
  @Input() depuisApp= 'Publications';
  @Output() versApp = new EventEmitter<string>();
  
  constructor(
    private helpS:HelpersService, 
    private titeServ :Title) { 

    this.titeServ.setTitle("Publications [9+]");
  }

  ngOnInit(): void {
    //setTimeout(()=>{ this.versApp.emit('Publications'); },4000)
    this.versApp.emit('Publications');
  }

  getPath(){
    return this.helpS.pathToImg ;
  }


}
