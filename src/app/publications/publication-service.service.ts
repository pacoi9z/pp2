import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class PublicationServiceService {

  constructor(private http:HttpClient, private dataService:LoginService) {

   }

   

  publications;

SEND_HTTP_LIKE(idPost) {
  //SEND HTTP REQUEST POST TO ADD LIKE TO A POST
  this.http.get(this.dataService.URL_PHP("SEND_HTTP_LIKE")).subscribe(
    (data:any) => {
    },
    error => {
      console.log(error);
    }
  )
}

SEND_HTTP_INFO(idPost) {
  //SEND HTTP REQUEST POST TO ADD LIKE TO A POST
  this.http.get(this.dataService.URL_PHP("SEND_HTTP_INFO")).subscribe(
    (data:any) => {
    },
    error => {
      console.log(error);
    }
  )
}

SEND_HTTP_VU(idPost) {
  //SEND HTTP REQUEST POST TO ADD VU TO A POST
  this.http.get(this.dataService.URL_PHP("SEND_HTTP_VU")).subscribe(
    (data:any) => {
    },
    error => {
      console.log(error);
    }
  )
}

gogetPubs = () => {
  
  return new Promise(
    (resolve,reject) => {

        this.http.get(this.dataService.URL_PHP("get_pub")).subscribe(
            (data:any) => {
              this.publications = data;
              resolve(this.publications);
            },
            error => {
              console.log(error);
              resolve(undefined);
            }
          )      
    }
  );

}




}
