import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FilterChart } from '../model/filterchart.model';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss'],
  
})
export class LinechartComponent implements OnInit {

  public options: any;
  public data: any;
  public dateFrom: Date;
  public dateTo: Date;
  //public filterOption: ChartFilterOption[];
  //public selectedOption: ChartFilterOption;
  @Input() filterData:FilterChart;
  
  responseData;
  view;
  showTime:Boolean;
  parameterOption: any[];
  stationOption:any[]
  constructor(private userService: UserService) { }

  // populateChart() {
  //   this.selectionChange(this.selectedOption, this.dateFrom, this.dateTo)
  // }
 
  populateChart() {
    var labelArray: string[];
    var dataArray: number[];
    var thresholdLevel:number[];
   
   //console.log(this.filterData)
    this.userService.getTrendsGraphdata(this.filterData).subscribe(res=>{
    
			if(res.apiStatus.message === 'success') 
    {
      this.responseData=res.data;
      labelArray =  this.responseData.labels
      dataArray =this.responseData.events
      thresholdLevel=this.responseData.thresholdLevel
      this.data = {
        labels: labelArray,
        datasets: [
          {
            label: "Parameters",
            data: dataArray,
            fill: false,
            borderColor: '#4bc0c0',
            hidden: false
          },
          {
            label: "Threshold Level",
            data: thresholdLevel,
            fill: false,
            borderColor: '#f44336',
            hidden: false
          }
        ]
      }
    }
   
  
    })
  
   
  
  }


  ngOnInit(): void {
    
this.populateChart()
    this.options = {
      //display labels on data elements in graph
      responsive: false,
      maintainAspectRatio: false,
      
      plugins: {
        datalabels: {
          display: true,
          align: 'end',
          anchor: 'end',
          borderRadius: 1,
          backgroundColor: 'teal',
          color: 'white',
          font: {
            weight: 'bold',
          }
        },
        // display chart title
        title: {
          display: true,
          text: "ALOK",
          fontSize: 16
        },
        legend: {
          display: false
        }
      }
    };
  }
}
// interface ChartFilterOption {
//   name: string;
//  // code: number;
// }