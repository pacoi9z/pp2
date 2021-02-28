
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { C404Component } from './c404/c404.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KidsspaceComponent } from './kidsspace/kidsspace.component';
import { LoginComponent } from './login/login.component';
import { RelationsComponent } from './relations/relations.component';

const route: Routes = [
  { path : 'myprofile',loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)},
  { path : 'publications', loadChildren: () => import('./publications/publications.module').then(m => m.PublicationsModule) },
  { path : 'messages', loadChildren: () => import('./messages/messages.module').then(m => m.MessagesModule) },
  { path : 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) },
  { path : 'kids' , component : KidsspaceComponent},
  { path : 'relations', component : RelationsComponent},
  { path : 'dashboard', component : DashboardComponent},
  { path : '', component : LoginComponent},
  { path: '**', redirectTo : '404' },
  { path: '404' , component : C404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
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
