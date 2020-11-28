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
    private titleService :Title) { 

    if(helpS.notif_Publication != '0')  
    this.titleService.setTitle(" ["+helpS.notif_Publication+"] Publications - El Razi School");
    else this.titleService.setTitle("Publications - El Razi School")
  }

  ngOnInit(): void {
    //setTimeout(()=>{ this.versApp.emit('Publications'); },4000)
    this.versApp.emit('Publications');
  }

  getPath(){
    return this.helpS.pathToImg ;
  }


}
