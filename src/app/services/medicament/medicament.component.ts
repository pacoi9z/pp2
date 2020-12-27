import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicament',
  templateUrl: './medicament.component.html',
  styleUrls: ['./medicament.component.scss']
})
export class MedicamentComponent implements OnInit {

  medoc = [0];
  constructor() { }

  ngOnInit(): void {
  }

  addMedoc() {
    this.medoc.push(0);
  }
  
  removeMedoc() {
    this.medoc.splice(0,1);
  }

}
