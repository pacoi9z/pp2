import { DatePipe } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { Title} from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { GlobalVarsService } from '../global-vars.service';
import { HelpersService } from '../helpers.service';
import { PublicationServiceService } from './publication-service.service';
@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {
  
  private pub_txt_maxLength = 255;
  private pub_txt_minLength = 2;
  private pub_evt_titre_maxLength = 255;
  private pub_evt_titre_minLength = 5;
  /////////////////////////////////////////////////////////
  loadingSpiner=true;
  whatStat="Text";
  startPub=0;//commancer par affiche la pub 0
  endPub=5;//finir avec la pub 5
  qestionSelectedPub; 
  PublicationData;
  MoulPubName;
  // grace a cette variable PRIO on va faire un système de priorité béch n'affiché les publications non lu en avan,
  // et des fois les publications li clicka 3lihom b'notification
  prio;
  
  constructor(
    private route : ActivatedRoute,
    private datePipe: DatePipe,
    public helpS:HelpersService,
    public pubS:PublicationServiceService, 
    private titleService :Title, 
    private gVars: GlobalVarsService) { 
  }

  ngOnInit(): void {
    
    //affiché le titre + le nombre de notif dans la balise TITLE dans l'HTML  
    if(this.helpS.notif_Publication != 0)  
    this.titleService.setTitle(" ["+this.helpS.notif_Publication+"] Publications - El Razi School");
    else this.titleService.setTitle("Publications - El Razi School");


    //trier les pub selon priorité pui selon les vu. 
      //je t'aiiiiiiime sina <3 <3 hmara 
      this.getPublicationsData();

  }


  getPublicationsData() {
    let dataPubs:any;
    this.pubS.gogetPubs().then((e) => {
      this.loadingSpiner=false;
      dataPubs = e;
      let mySelectedPub;
      //trier la data ta3na d'une façon a avoir les non vu en premier
      dataPubs.sort((e1,e2) => { 
          if(e1.vuPub==null && e2.vuPub!=null) return -1 
          else if(e1.vuPub!=null && e2.vuPub!=null) return 1
          else if(e1.vuPub!=null && e2.vuPub!=null) 
                if(e1.vuPub>e2.vuPub) return -1
                else if(e1.vuPub<e2.vuPub) return 1
                else return 0
          else return 0
        })
      //lire l'id trouvé dans l'url
      this.route.params.subscribe(e => {
        this.prio = e.id;
        if(this.prio!=undefined)
        {
          
          let index = dataPubs.findIndex(e => e.idPub == this.prio);
          mySelectedPub = dataPubs.find(e => e.idPub == this.prio);
          if(mySelectedPub!=null) {
            //supprimer l'objet selectionner
            dataPubs.splice(index,1);
                  
            //positioné ma pub selectionné en première position, chghol kima nti dok dertek priorité lowla ga3 fi hyati khi hmara -_-
            dataPubs.unshift(mySelectedPub);
          }
          
        }
        this.refreshPubList();
      });

      

      
    });
    
    
  }


  getPath(){
    return this.gVars.linkToPHP;
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
    if(this.endPub<this.pubS.publications.length)
    this.endPub+=3;
    this.refreshPubList();
  }

  end9elMenData() {
    return this.endPub<this.pubS.publications.length;
  }

  refreshPubList() {
    this.PublicationData = this.pubS.publications.slice(this.startPub,this.endPub)
  }

  pubType(type) {
    this.whatStat=type;
  } 

  SendInfo(idPub) {
    
    let myObj = this.pubS.publications.find(e => e.idPub == idPub);
    let inf = myObj.infoPub;

    if(inf==="true") {
      myObj.infoPub = "false";
      myObj.nbiPub -= 1;
    }
    else {
      myObj.infoPub = "true";
      myObj.nbiPub += 1;
    }
    
    this.pubS.SEND_HTTP_INFO(idPub);

  }

  SendLike(idPub) {

    let myObj = this.pubS.publications.find(e=> e.idPub == idPub);
    let jm = myObj.jaimPub;

    if(jm==="true") {
      myObj.jaimPub = "false";
      myObj.nbjPub -= 1;
    }
    else {
      myObj.jaimPub = "true";
      myObj.nbjPub += 1;
    }

    this.pubS.SEND_HTTP_LIKE(idPub);

  }

  ModPub(idPub) {

  }

  sendVu (idPub){
    let myObj = this.pubS.publications.find(e=> e.idPub == idPub);
    let vu = myObj.vuPub;

    myObj.vuPub = this.datePipe.transform(new Date(),'h:m');
    
    this.pubS.SEND_HTTP_VU(idPub);
  }

  questionModal(idPub) {
    let myObj = this.pubS.publications.find(e=> e.idPub == idPub);
    this.qestionSelectedPub=myObj.typeMoulPub;
    this.MoulPubName = myObj.nomPub;
    document.getElementById("forPub").setAttribute('value',idPub);
    document.getElementById("forMoulPub").setAttribute('value',myObj.idMoulPub);
  }

  
  msgIsSelectif() {
    if(this.helpS.gettype()=='Parent' && this.qestionSelectedPub=='Enseignant')
    return true;
    else return false;
  }


  publier() {

  }

}
