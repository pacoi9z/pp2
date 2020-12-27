import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileModule } from './profile/profile.module';
import { PublicationsModule } from './publications/publications.module';
import { MessagesModule } from './messages/messages.module';
import { ServicesModule } from './services/services.module';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {DemoMaterialModule} from './material-module';

//import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChatComponent,
    C404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //BrowserAnimationsModule,
    //DemoMaterialModule,
    //HttpClientModule,
    ProfileModule,
    PublicationsModule,
    ServicesModule,
    MessagesModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
