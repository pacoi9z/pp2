

import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from '../users';

@Injectable({
providedIn: 'root'
})

export class LoginService {
    ME:any;
    redirectUrl: string;
    baseUrl:string = "http://10.0.0.10/__API_KIDS/";

    @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
    
    constructor(private httpClient : HttpClient) { }

    public userlogin(username, password) {
        return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
        .pipe(map(Users => {
        this.setMe(Users);
        this.ME = {
            nom : Users[0].nom, 
            prenom : Users[0].prenom, 
            type : Users[0].type,  
            tel : Users[0].num_tel,  
            email : Users[0].email,  
            photo : Users[0].photo,
            token : Users[0].token
        }   
        console.log(this.ME+" "+new Date().getTime());
        return Users;
    }));
    
    }

    //token
    setMe(User) {
        localStorage.setItem('nom', User[0].nom);
        localStorage.setItem('num_tel', User[0].num_tel);
        localStorage.setItem('email', User[0].email);
        localStorage.setItem('prenom', User[0].prenom);
        localStorage.setItem('photo', User[0].photo);
        localStorage.setItem('type', User[0].type);
        localStorage.setItem('token', User[0].token);
    }
    
    getMe() {

    console.log("ME NOM : "+this.ME+" "+new Date().getTime())
    return this.ME; 
    }
    

    getToken() {
    return localStorage.getItem('token');
    }

    deleteToken() {
    localStorage.removeItem('nom');
    localStorage.removeItem('num_tel');
    localStorage.removeItem('email');
    localStorage.removeItem('prenom');
    localStorage.removeItem('photo');
    localStorage.removeItem('type');
    localStorage.removeItem('token');
    }

    isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
    return true
    }
    return false;
    }

}