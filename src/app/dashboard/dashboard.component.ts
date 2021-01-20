import { Component, OnInit } from '@angular/core';
import { HelpersService } from '../helpers.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public helpS : HelpersService,) { }

  ngOnInit(): void {}

}
