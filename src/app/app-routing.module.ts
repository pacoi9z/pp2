import { componentFactoryName } from '@angular/compiler';
import { Component, ComponentFactory, NgModule } from '@angular/core';
import { Routes, RouterModule, ROUTES } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { PublicationsComponent } from './publications/publications.component';

const routes: Routes = [
  { path : 'publications', component : PublicationsComponent },
  { path : 'messages', component : MessagesComponent },
  { path : '', component : PublicationsComponent },
  { path: '**', redirectTo: '/404' }
  //{ path: '/404' , component : ; }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
