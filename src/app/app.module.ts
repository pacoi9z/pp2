import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChatComponent } from './chat/chat.component';
import { C404Component } from './c404/c404.component';
import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileModule } from './profile/profile.module';
import { PublicationsModule } from './publications/publications.module';
import { MessagesModule } from './messages/messages.module';
import { ServicesModule } from './services/services.module';
import { KidsspaceComponent } from './kidsspace/kidsspace.component';
import { RelationsComponent } from './relations/relations.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {DemoMaterialModule} from './material-module';

//import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChatComponent,
    C404Component,
    KidsspaceComponent,
    RelationsComponent,
    DashboardComponent,
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
