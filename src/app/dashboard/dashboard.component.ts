import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { HelpersService } from '../helpers.service';
import { ApexAnnotations, ApexAxisChartSeries, ApexDataLabels, ApexFill, ApexGrid, ApexLegend, ApexPlotOptions, ApexStates, ApexStroke, ApexTheme, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis, ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import { Title } from '@angular/platform-browser';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  //@ViewChild("chart") chart: ChartComponent;
  //@ViewChild('chartObj') chart: ChartComponent;

  @Input() chart: ApexChart;
  @Input() annotations: ApexAnnotations;
  @Input() colors: string[];
  @Input() dataLabels: ApexDataLabels;
  @Input() series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  @Input() stroke: ApexStroke;
  @Input() labels: string[];
  @Input() legend: ApexLegend;
  @Input() fill: ApexFill;
  @Input() tooltip: ApexTooltip;
  @Input() plotOptions: ApexPlotOptions;
  @Input() responsive: ApexResponsive[];
  @Input() xaxis: ApexXAxis;
  @Input() yaxis: ApexYAxis | ApexYAxis[];
  @Input() grid: ApexGrid;
  @Input() states: ApexStates;
  @Input() title: ApexTitleSubtitle;
  @Input() subtitle: ApexTitleSubtitle;
  @Input() theme: ApexTheme;
  public chartOptions: Partial<ChartOptions>;

  constructor(public helpS : HelpersService, private titleService :Title ) {

    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  

}

  ngOnInit(): void {

    //affiché le titre + le nombre de notif dans la balise TITLE dans l'HTML  
    if(this.helpS.notif_Dashboard != 0)  
    this.titleService.setTitle(" ["+this.helpS.notif_Dashboard+"] Dashboard - El Razi School");
    else this.titleService.setTitle("Dashboard - El Razi School");

  }

}
