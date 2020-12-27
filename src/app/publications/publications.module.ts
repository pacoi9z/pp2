import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationsComponent } from './publications.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
    { path : '', component : PublicationsComponent },
    { path : ':id', component : PublicationsComponent },
];

@NgModule({
  declarations: [PublicationsComponent],
  imports: [
   RouterModule.forChild(route), CommonModule],
  exports: []
})
export class PublicationsModule { }
