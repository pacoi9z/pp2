import { Component, OnInit } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader"

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent implements OnInit {

  constructor() { 
    

  }

  ngOnInit(): void {
    if(navigator.geolocation)
    navigator.geolocation.getCurrentPosition(this.maPosition);

  }

  maPosition(position) {
    var infopos = "Position déterminée :\n";
    infopos += "Latitude : "+position.coords.latitude +"\n";
    infopos += "Longitude: "+position.coords.longitude+"\n";
    infopos += "Altitude : "+position.coords.altitude +"\n";
    document.getElementById("infoposition").innerHTML = infopos;
  }
  
  

}
