import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
  this.http.post(this.dataService.URL_PHP("SEND_HTTP_LIKE"), {idPost} ).subscribe(
    (data:any) => {
      console.log(JSON.stringify(data))
    },
    error => {
      console.log(JSON.stringify(error))
    }
  )
}

SEND_HTTP_INFO(idPost) {
  //SEND HTTP REQUEST POST TO ADD LIKE TO A POST
  this.http.post(this.dataService.URL_PHP("SEND_HTTP_INFO"), {idPost} ).subscribe(
    (data:any) => {
      console.log(JSON.stringify(data))
    },
    error => {
      console.log(JSON.stringify(error))
    }
  )
}

SEND_HTTP_VU(idPost) {
  //SEND HTTP REQUEST POST TO ADD VU TO A POST
  this.http.post(this.dataService.URL_PHP("SEND_HTTP_VU") , {idPost} ).subscribe(
    (data:any) => {
      
    },
    error => {
      
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
              resolve(undefined);
            }
          )      
    }
  );

}
// TUTO FROM https://www.positronx.io/angular-file-upload-with-progress-bar-tutorial/

mediaUpload(profileImage: File): Observable<any> {
  var formData: any = new FormData();
  formData.append("media", profileImage);
  
  return this.http.post(this.dataService.URL_PHP("mediaUpload"), formData, {
    reportProgress: true,
    observe: 'events'
  }).pipe(
    catchError(this.errorMgmt)
  )
}

errorMgmt(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}

// TUTO FROM : https://www.positronx.io/angular-file-upload-with-progress-bar-tutorial/

gogetUserList = () => {
  
  return new Promise(
    (resolve,reject) => {

        this.http.get(this.dataService.URL_PHP("USER_LIST")).subscribe(
            (data:any) => {
              this.publications = data;
              resolve(this.publications);
            },
            error => {
              resolve(undefined);
            }
          )      
    }
  );

}




}
