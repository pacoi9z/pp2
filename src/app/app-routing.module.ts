import { componentFactoryName } from '@angular/compiler';
import { Component, ComponentFactory, NgModule } from '@angular/core';
import { Routes, RouterModule, ROUTES } from '@angular/router';
import { C404Component } from './c404/c404.component';
import { MessagesComponent } from './messages/messages.component';
import { PublicationsComponent } from './publications/publications.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
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

export class AppRoutingModule { }
