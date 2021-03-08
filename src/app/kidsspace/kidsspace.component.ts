import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HelpersService } from '../helpers.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-kidsspace',
  templateUrl: './kidsspace.component.html',
  styleUrls: ['./kidsspace.component.scss']
})
export class KidsspaceComponent implements OnInit {

  showMsg;
  dataHTTP;
  loading=true;
  kidsData:any[];

  constructor(public helpS : HelpersService,
    public http:HttpClient,
    private sanitizer: DomSanitizer,
    private dataService:LoginService) {

    this.goGetKids();    
   }

  ngOnInit(): void {
  }

  gameOnly() {
    return this.kidsData.filter(e=>e.elem=='J');
  }

  videoOnly() {
    return this.kidsData.filter(e=>e.elem=='V');
  }

  histoirOnly() {
    return this.kidsData.filter(e=>e.elem=='H');
  }

  leconOnly() {
    return this.kidsData.filter(e=>e.elem=='L');
  }

  goAddKids() {

    

    this.showMsg=true;
    this.dataHTTP = "OK"
    setTimeout(()=>{
      this.showMsg=false;
      this.dataHTTP = ""
    },2000);
  }

  trustedUrl() {
    let url;
    for(let i of this.kidsData.filter((e)=>e.elem=='V'))
    { 
      i['trustedLien'] = this.sanitizer.bypassSecurityTrustResourceUrl(i.lien);
    }
  }

  goGetKids() {

    this.http.get(this.dataService.URL_PHP("GET_KIDS")).subscribe(
      (e:any[])=>{ this.kidsData=e; this.loading=false; this.trustedUrl() },
      (e)=>{} )
    
  }


}
