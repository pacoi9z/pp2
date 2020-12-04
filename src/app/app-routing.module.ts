import { componentFactoryName } from '@angular/compiler';
import { Component, ComponentFactory, NgModule } from '@angular/core';
import { Routes, RouterModule, ROUTES, ExtraOptions } from '@angular/router';
import { C404Component } from './c404/c404.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';
import { PublicationsComponent } from './publications/publications.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path : 'myprofile', component : ProfileComponent },
  { path : 'publications', component : PublicationsComponent },
  { path : 'messages', component : MessagesComponent },
  { path : 'services/:serv', component : ServicesComponent },
  { path : '', component : PublicationsComponent },
  { path: '**', redirectTo : '404' },
  { path: '404' , component : C404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule  {
  /*
  
(focus)="myMethod()"  // An element has received focus
(blur)="myMethod()"   // An element has lost focus

(submit)="myMethod()"  // A submit button has been pressed

(scroll)="myMethod()"

(cut)="myMethod()"
(copy)="myMethod()"
(paste)="myMethod()"

(keydown)="myMethod()"
(keypress)="myMethod()"
(keyup)="myMethod()"

(mouseenter)="myMethod()"
(mousedown)="myMethod()"
(mouseup)="myMethod()"

(click)="myMethod()"
(dblclick)="myMethod()"

(drag)="myMethod()"
(dragover)="myMethod()"
(drop)="myMethod()"
  
  */
 }
