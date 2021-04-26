import { DatePipe } from '@angular/common';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Title} from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { HelpersService } from '../helpers.service';
import { LoginService } from '../login/login.service';
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
  ListeUsers;
  ListeUsersToShow;
  selUsers;
  quipeuvoir;
  avecQui;
  ListeUsersLoading:boolean;
  mediaName:String="";
  mediaType:String="";
  mediaSize=0;
  maxSizeAuthorised=52399999;
  progress: number = 0;
  errorMsgPublier:String = "";


  @ViewChild('ListUsersDiv') ListUsersDiv:ElementRef;
  @ViewChild('Text') Text:ElementRef;
  @ViewChild('media') media:ElementRef;
  @ViewChild('Evenement_text') Evenement_text:ElementRef;
  @ViewChild('Evenement_time') Evenement_time:ElementRef;
  @ViewChild('Evenement_date') Evenement_date:ElementRef;
  @ViewChild('area') area:ElementRef;

  // grace a cette variable PRIO on va faire un système de priorité béch n'affiché les publications non lu en avan,
  // et des fois les publications li clicka 3lihom b'notification
  prio;
  
  constructor(
    private route : ActivatedRoute,
    private datePipe: DatePipe,
    public helpS:HelpersService,
    public pubS:PublicationServiceService, 
    private titleService :Title,
    private dataService:LoginService) { 
      
      this.selUsers = [];
      this.quipeuvoir = 'all';
      this.save_quipeuvoir();
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


  
  getUserList() {
    if(!this.ListeUsers) {
      this.ListeUsersLoading = true;
      this.pubS.gogetUserList().then((e)=> {
        this.ListeUsers = e;
        for(let u of this.ListeUsers) {
          u['checked'] = false;
        }
        this.ListeUsersToShow = this.ListeUsers;
        this.ListeUsersLoading = false;
      })
    }
    
  }

  radioChanged(evt) {
    this.quipeuvoir = evt.target.value;
  }

  get get_selUsers() {
    return this.ListeUsers
              .filter(p => p.checked)
              .map(p => { return  {id:p.id,nom:p.nom}  })
  }

  get_searchUsers(val) {
    return this.ListeUsers.filter((p) => { 
                if(p.nom.includes(val) || (p.parentde!=null && p.parentde.includes(val)))
                return p;
              })
  }

  checke_user(i,event) {
    this.ListeUsers[i].checked = event.target.checked;
  }

  save_quipeuvoir() {
    //rajouter la condition pour enseignant selon le type de compte papi 
    if(this.quipeuvoir=="all") {
      if(this.helpS.ME.type=='D') this.avecQui = "Tout le monde";
      else this.avecQui = "Direction et tout les comptes liés au votre" 
    }
    else if(this.quipeuvoir=="dir") this.avecQui =  "Direction seulement"
    else {
      let str = 'direction, ';
      for(let p of this.get_selUsers) {
        str+=p.nom+', ';
      }
      this.avecQui =  str.substring(0,str.length-2);
    };
  }

  searchinlist(t) {
    let val = (t as HTMLInputElement).value;
    console.log(val);
    this.ListeUsersToShow = this.get_searchUsers(val);
    console.log(this.ListeUsers);
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
    return this.dataService.getpath();
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
    this.viderTout();
    this.whatStat=type;
  } 

  SendInfo(idPub) {
    
    let myObj = this.pubS.publications.find(e => e.idPub == idPub);
    let inf = myObj.infoPub;

    if(inf==="true") {
      myObj.infoPub = "false";
      myObj.nbiPub --;
    }
    else {
      myObj.infoPub = "true";
      myObj.nbiPub ++;
    }
    
    this.pubS.SEND_HTTP_INFO(idPub);

  }

  mediaClick() {
    /*
    let element = document.getElementById('media') as HTMLElement;
    element.click()
    */
    this.media.nativeElement.click();
  }

  mediaChanged($event) {
    //this.mediaName = this.media.nativeElement.value.split(/(\\|\/)/g).pop();
    
    this.mediaName = this.media.nativeElement.files[0].name;
    this.mediaType = this.media.nativeElement.files[0].name.split('.').pop();
    //this.mediaModified = this.media.nativeElement.files[0].lastModified
    this.mediaSize = this.media.nativeElement.files[0].size;
    
    this.mediaService()
  }

  // TUTO FROM https://www.positronx.io/angular-file-upload-with-progress-bar-tutorial/

  

  mediaService() {
    this.pubS.mediaUpload(
      this.media.nativeElement.files[0]
    ).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received!');
          break;
        case HttpEventType.UploadProgress:
          this.progress = Math.round(event.loaded / event.total * 100);
          console.log(`Uploaded! ${this.progress}%`);
          break;
        case HttpEventType.Response:
          console.log('User successfully created!', event.body);
          setTimeout(() => {
            this.progress = 0;
            this.viderTout();
          }, 1500);

      }
    })
  }
  // TUTO FROM https://www.positronx.io/angular-file-upload-with-progress-bar-tutorial/
  viderTout() {
    if(this.whatStat == 'Fichier' && this.media != null) {
      this.mediaName = "";
      this.mediaSize = 0;
      this.mediaType = "";
      this.media = null;
      this.progress = 0;
    }
    else if(this.whatStat == 'Evenement' && this.Evenement_text!=null) {
        this.Evenement_text = null
        this.Evenement_time = null 
        this.Evenement_date = null
    }
    else if(this.whatStat == 'Exercice') {
      this.area.nativeElement.value = "";
    }
    else if(this.whatStat == 'Devoir') {
      this.area.nativeElement.value = "";
    }
    else if(this.whatStat == 'Questionaire') {
      this.area.nativeElement.value = "";
    }
  }

  verfieDate(trgt ) {
    let inpt = (trgt) as HTMLInputElement;
    alert(this.datePipe.transform(new Date(),'y-MM-dd')+" == "+inpt.value)
  }

  getReadableFileSizeString(fileSizeInBytes) {
    if(fileSizeInBytes!=0) {
      var i = -1;
      var byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
      do {
          fileSizeInBytes = fileSizeInBytes / 1024;
          i++;
      } while (fileSizeInBytes > 1024);
  
      return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
    }
    return "";
  };

  SendLike(idPub) {

    let myObj = this.pubS.publications.find(e=> e.idPub == idPub);
    let jm = myObj.jaimPub;

    if(jm==="true") {
      myObj.jaimPub = "false";
      myObj.nbjPub--;
    }
    else {
      myObj.jaimPub = "true";
      myObj.nbjPub++;
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

  selcectquipeuvoir(qui){
    let v = document.getElementById(qui).classList;
  }
  
  msgIsSelectif() {
    if(this.helpS.ME?.type=='Parent' && this.qestionSelectedPub=='Enseignant')
    return true;
    else return false;
  }


  publier() {

  }

}
