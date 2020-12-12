import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Title} from '@angular/platform-browser';
import { HelpersService } from '../helpers.service';
import { PublicationServiceService } from './publication-service.service';
@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {
  
  startPub=0;
  endPub=2;

  PublicationData;
  
  constructor(
    private helpS:HelpersService,
    private dataPub:PublicationServiceService, 
    private titleService :Title) { 
     
    if(helpS.notif_Publication != '0')  
    this.titleService.setTitle(" ["+helpS.notif_Publication+"] Publications - El Razi School");
    else this.titleService.setTitle("Publications - El Razi School");

    this.PublicationData = dataPub.publications.slice(this.startPub,this.endPub);

  }

  ngOnInit(): void {
    
  }

  getPath(){
    return this.helpS.pathToImg;
  }




  isArabic(txt) {
    var pattern = /[\u0600-\u06FF\u0750-\u077F]/;
    return pattern.test(txt);
  }

  openInNewTab(filePub){
    window.open(filePub, '_blank');
  }

  showMore() {
    
    this.PublicationData = this.dataPub.publications.slice(this.startPub-2,this.endPub+2);
  }

}
