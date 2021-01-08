import { Component, OnInit } from '@angular/core';
import { HelpersService } from '../helpers.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(public helpS:HelpersService) {  
  }

  ngOnInit(): void {
  }

}
