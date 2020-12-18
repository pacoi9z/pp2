import { DatePipe } from '@angular/common';
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
  
  whatStat="Text";
  startPub=0;//commancer par affiche la pub 0
  endPub=5;//finir avec la pub 5

  PublicationData;
  
  constructor(
    private datePipe: DatePipe,
    public helpS:HelpersService,
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
    this.startPub;
    if(this.endPub<this.dataPub.publications.length)
    this.endPub+=3;
    this.refreshPubList();
  }

  end9elMenData() {
    return this.endPub<this.dataPub.publications.length;
  }

  refreshPubList() {
    this.PublicationData = this.dataPub.publications.slice(this.startPub,this.endPub)
  }

  pubType(type) {
    this.whatStat=type;
  } 

  SendInfo(idPub) {
    
    let myObj = this.dataPub.publications.find(e=> e.idPub == idPub);
    let inf = myObj.infoPub;

    if(inf==="true") {
      myObj.infoPub = "false";
      myObj.nbiPub -= 1;
    }
    else {
      myObj.infoPub = "true";
      myObj.nbiPub += 1;
    }
    this.refreshPubList();
    this.dataPub.LikePost(idPub);
  }

  SendLike(idPub) {
    let myObj = this.dataPub.publications.find(e=> e.idPub == idPub);
    let jm = myObj.jaimPub;

    if(jm==="true") {
      myObj.jaimPub = "false";
      myObj.nbjPub -= 1;
    }
    else {
      myObj.jaimPub = "true";
      myObj.nbjPub += 1;
    }
    this.refreshPubList();
    this.dataPub.infoPost(idPub);
  }

  ModPub(idPub) {

  }

  setVu (idPub){
    let myObj = this.dataPub.publications.find(e=> e.idPub == idPub);
    let vu = myObj.vuPub;

    myObj.vuPub = this.datePipe.transform(new Date(),'h:m');
    
    this.refreshPubList();
    this.dataPub.setVu(idPub);
  }




}
