import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';




const route: Routes = [
    { path : '', component : ProfileComponent },
];

@NgModule({
  declarations: [
    ProfileComponent,
  ],
  imports: [RouterModule.forChild(route), CommonModule],
  exports: []
})
export class ProfileModule { }
