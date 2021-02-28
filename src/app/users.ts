export class Users {
    

    public nom: string;
    public prenom: string;
    public type:string;
    public tel:string;
    public email: string;
    public photo: string;
    public token:string;
    
    constructor(nom: string, prenom: string, type:string, tel:string, email: string, photo: string, token:string) {
    this.nom = nom;
    this.email = email;
    this.prenom = prenom;   
    this.type = type;
    this.tel = tel;
    this.photo = photo;
    this.token = token;
    }
    }