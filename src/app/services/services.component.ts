
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  
  rendezvous = false;
  certificascolarite = false;
  absence = false;
  retard = false;
  medicament = false;

  constructor(private route:ActivatedRoute) { }


  ngOnInit(): void {
   this.route.params.subscribe(data => { 
    this.rendezvous = false;
    this.certificascolarite = false;
    this.absence = false;
    this.retard = false;
    this.medicament = false;
     if(data.serv === 'medicament') this.medicament = true;
     else if(data.serv === 'retard') this.retard = true;
     else if(data.serv === 'absence') this.absence = true;
     else if(data.serv === 'certificascolarite') this.certificascolarite = true;
     else if(data.serv === 'rendezvous') this.rendezvous = true;

   });
  }

}
