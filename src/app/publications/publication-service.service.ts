import { Injectable } from '@angular/core';
import { abort } from 'process';

@Injectable({
  providedIn: 'root'
})
export class PublicationServiceService {

  constructor() { }

  //http request to get Publication data related to the auth user from server 
  //Ordred by date,time,vu
  //recent first, not seen first

  publications =[{
    idPub:"21P",
    photoPub:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    nomPub:"Ziane Raiss",
    aPub:"Tout le monde",
    timePub:"Aujourd'huit à 14h43",
    txtPub:"Somme Text here, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, soluta ducimus neque culpa error consequatur repellendus inventore obcaecati tempora totam corporis, libero voluptatem, ullam iusto odio veritatis laudantium! Soluta, eveniet?",
    
    nbjPub:4,
    nbrPub:5,
    nbiPub:3,
    MediaLinkPub:null,
    MediaNamePub:null,
    MediaTypePub:null,
    vuPub:"14h00",
    jaimPub:"true",
    qestPub:"false",
    infoPub:"true",
  },
  {
    idPub:"24P",
    photoPub:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    nomPub:"Bechkoune Hanane",
    aPub:"Parents et Administration",
    timePub:"Hier à 19h07",
    txtPub:"لا يجوز تعريض أحد لتدخل تعسفي في حياته الخاصة أو في شؤون أسرته أو مسكنه أو مراسلاته، ولا لحملات تمس شرفه وسمعته. ولكل شخص حق في أن يحميه القانون من مثل ذلك التدخل أو تلك الحملات. لكل فرد حق التماس ملجأ في بلدان أخرى والتمتع به خلاصا من الاضطهاد",
    nbjPub:2,
    nbrPub:3,
    nbiPub:1,
    MediaLinkPub:"http://localhost/DataBases/bases/Evaluation30.bak",
    MediaNamePub:"Evaluation30",
    MediaTypePub:"file",
    vuPub:null,
    jaimPub:"false",
    qestPub:"true",
    infoPub:"false",
  },
  {
    idPub:"25P",
    photoPub:"https://images.unsplash.com/photo-1546820389-44d77e1f3b31?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fGZhY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    nomPub:"Ziane Islam",
    aPub:"Tout le monde",
    timePub:"Aujourd'huit à 14h43",
    txtPub:"Somme Text here, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, soluta ducimus neque culpa error consequatur repellendus inventore obcaecati tempora totam corporis, libero voluptatem, ullam iusto odio veritatis laudantium! Soluta, eveniet?",
    nbjPub:4,
    nbrPub:5,
    nbiPub:3,
    MediaLinkPub:"vdo/Minuscule2.mkv",
    MediaNamePub:"mkv",
    MediaTypePub:"vdo",
    vuPub:"14h00",
    jaimPub:"true",
    qestPub:"false",
    infoPub:"true",
  },
  {
    idPub:"28P",
    photoPub:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    nomPub:"Belmadi Amel",
    aPub:"Tout le monde",
    timePub:"Aujourd'huit à 14h43",
    txtPub:"Somme Text here, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, soluta ducimus neque culpa error consequatur repellendus inventore obcaecati tempora totam corporis, libero voluptatem, ullam iusto odio veritatis laudantium! Soluta, eveniet?",
    nbjPub:4,
    nbrPub:5,
    nbiPub:3,
    MediaLinkPub:"ab.jpg",
    MediaNamePub:"ab",
    MediaTypePub:"img",
    vuPub:"14h00",
    jaimPub:"true",
    qestPub:"false",
    infoPub:"true",
  },
  
  {
    idPub:"28P",
    photoPub:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    nomPub:"Belmadi Amel",
    aPub:"Tout le monde",
    timePub:"Aujourd'huit à 14h43",
    txtPub:"Somme Text here, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, soluta ducimus neque culpa error consequatur repellendus inventore obcaecati tempora totam corporis, libero voluptatem, ullam iusto odio veritatis laudantium! Soluta, eveniet?",
    nbjPub:4,
    nbrPub:5,
    nbiPub:3,
    MediaLinkPub:"vdo/10000000_565370494008802_7485061178591281152_n.mp4",
    MediaNamePub:"mp4",
    MediaTypePub:"vdo",
    vuPub:"14h00",
    jaimPub:"true",
    qestPub:"false",
    infoPub:"true",
  },
  
  {
    idPub:"28P",
    photoPub:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    nomPub:"Belmadi Amel",
    aPub:"Tout le monde",
    timePub:"Aujourd'huit à 14h43",
    txtPub:"Somme Text here, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, soluta ducimus neque culpa error consequatur repellendus inventore obcaecati tempora totam corporis, libero voluptatem, ullam iusto odio veritatis laudantium! Soluta, eveniet?",
    nbjPub:4,
    nbrPub:5,
    nbiPub:3,
    MediaLinkPub:"vdo/64670998_191563708451992_8495448674447392768_n.mp4",
    MediaNamePub:"mp4",
    MediaTypePub:"vdo",
    vuPub:"14h00",
    jaimPub:"true",
    qestPub:"false",
    infoPub:"true",
  },
];

LikePost(idPost) {
  //SEND HTTP REQUEST POST TO ADD LIKE TO A POST
  console.log('http sent to server id:'+idPost+" for add like");
}

setVu(idPost) {
  console.log('http sent to server id:'+idPost+" for add vu");
}

}
