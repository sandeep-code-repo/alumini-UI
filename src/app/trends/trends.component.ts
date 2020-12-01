import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../services/config/config.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { UserService } from '../services/user/user.service';
import {Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  public lineChartData: ChartDataSets[] = [
    { data: [100,97,88,10,78,33,10,0], label: 'Series A' },
  ];
  private eventsOnChartLimit = 50;
  countEventsChartType = "line";
  public lineChartLabels: Label= ['11/11 12.26', '11/11 18.26', '11/11 24.26', '12/11 12.26', '12/11 18.26', '12/11 24.26', '13/11 12.26'];
  
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];

  constructor(private router: Router,private userService:UserService) { }

  ngOnInit(): void {
  }

}
