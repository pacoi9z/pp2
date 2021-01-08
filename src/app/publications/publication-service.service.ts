import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicationServiceService {

  constructor(private http:HttpClient) { }

   

  publications;

SEND_HTTP_LIKE(idPost) {
  //SEND HTTP REQUEST POST TO ADD LIKE TO A POST
}

SEND_HTTP_INFO(idPost) {
  //SEND HTTP REQUEST POST TO ADD LIKE TO A POST
}

SEND_HTTP_VU(idPost) {
  //SEND HTTP REQUEST POST TO ADD VU TO A POST
}

gogetPubs = () => {
  
  return new Promise(
    (resolve,reject) => {

        this.http.get('http://localhost:3000/Pubs').subscribe(
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
