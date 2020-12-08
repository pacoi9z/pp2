import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicationsComponent } from './publications/publications.component';
import { MessagesComponent } from './messages/messages.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChatComponent } from './chat/chat.component';
import { ServicesComponent } from './services/services.component';
import { RendezvousComponent } from './services/rendezvous/rendezvous.component';
import { CertificatComponent } from './services/certificat/certificat.component';
import { AbsenceComponent } from './services/absence/absence.component';
import { RetardComponent } from './services/retard/retard.component';
import { MedicamentComponent } from './services/medicament/medicament.component';
import { C404Component } from './c404/c404.component';
import { ProfileComponent } from './profile/profile.component';
import { CarteComponent } from './carte/carte.component';
import { CaisseComponent } from './caisse/caisse.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {DemoMaterialModule} from './material-module';

//import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PublicationsComponent,
    MessagesComponent,
    NavbarComponent,
    ChatComponent,
    ServicesComponent,
    RendezvousComponent,
    CertificatComponent,
    AbsenceComponent,
    RetardComponent,
    MedicamentComponent,
    C404Component,
    ProfileComponent,
    CarteComponent,
    CaisseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //BrowserAnimationsModule,
    //DemoMaterialModule,
    //HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
