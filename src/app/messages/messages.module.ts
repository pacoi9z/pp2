import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const route: Routes = [
    { path : '', component : MessagesComponent },
    { path : ':id', component : MessagesComponent },
];

@NgModule({
  declarations: [
    MessagesComponent,
  ],
  imports: [
    RouterModule.forChild(route), 
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: []
})
export class MessagesModule { }
