

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

    @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
    
    constructor(private httpClient : HttpClient) { }

    public userlogin(username, password) {
        console.log(this.getpath()+"/login.php");
        return this.httpClient.post<any>( this.getpath()+"/login.php" , { username, password })
        .pipe(map(Users => {
        
        this.setMe(Users);
        return Users;
    }));
    
    }

    getpath() {
        return "http://127.0.0.1/__API_KIDS";
    }

    URL_PHP(page) {
        return this.getpath() + "/"+page+".php?tok="+this.getToken();
    }
    
    //token
    setMe(User) {
        this.ME = {
            id : User[0].id,
            nom : User[0].nom, 
            prenom : User[0].prenom, 
            type : User[0].type,  
            tel : User[0].num_tel,  
            email : User[0].email,  
            photo : User[0].photo,
            token : User[0].token
        }  
        localStorage.setItem('id', User[0].id);
        localStorage.setItem('nom', User[0].nom);
        localStorage.setItem('num_tel', User[0].num_tel);
        localStorage.setItem('email', User[0].email);
        localStorage.setItem('prenom', User[0].prenom);
        localStorage.setItem('photo', User[0].photo);
        localStorage.setItem('type', User[0].type);
        localStorage.setItem('token', User[0].token);
    }
    
    getMe() {
        this.ME = {
            id : localStorage.getItem('id'),
            nom : localStorage.getItem('nom'), 
            prenom : localStorage.getItem('prenom'), 
            type : localStorage.getItem('type'),  
            tel : localStorage.getItem('tel'),  
            email : localStorage.getItem('email'),  
            photo : localStorage.getItem('photo'),
            token : localStorage.getItem('token')
        } 
        return this.ME; 
    }
    

    getToken() {
    return localStorage.getItem('token');
    }

    deleteToken() {
    localStorage.removeItem('id');
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