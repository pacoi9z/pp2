import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HelpersService } from '../helpers.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private helpS: HelpersService, 
    private titleService:Title ) {
    if(helpS.notif_Profile != '0')  
    this.titleService.setTitle(" ["+helpS.notif_Profile+"] Profile - El Razi School");
    else this.titleService.setTitle("Profile - El Razi School")
    }

  ngOnInit(): void {
  }

}
