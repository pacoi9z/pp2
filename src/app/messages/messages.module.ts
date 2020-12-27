import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
    { path : '', component : MessagesComponent },
    { path : ':id', component : MessagesComponent },
];

@NgModule({
  declarations: [
    MessagesComponent,
  ],
  imports: [RouterModule.forChild(route), CommonModule],
  exports: []
})
export class MessagesModule { }
