import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { CertificatComponent } from './certificat/certificat.component';
import { AbsenceComponent } from './absence/absence.component';
import { RetardComponent } from './retard/retard.component';
import { MedicamentComponent } from './medicament/medicament.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
    { path : ':serv', component : ServicesComponent },
];

@NgModule({
  declarations: [
    ServicesComponent,
    RendezvousComponent,
    CertificatComponent,
    AbsenceComponent,
    RetardComponent,
    MedicamentComponent,
  ],
  imports: [RouterModule.forChild(route), CommonModule],
  exports: []
})
export class ServicesModule { }
