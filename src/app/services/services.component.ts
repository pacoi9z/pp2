
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
   this.route.params.subscribe(data => { console.log(data) });
  }

}
