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
  
  responseData:ResponseGraph[]=[];
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
    var  datasets:any[]=[];
   //console.log(this.filterData)
    this.userService.getTrendsGraphdata(this.filterData).subscribe(res=>{
    
			if(res.apiStatus.message === 'success') 
    {
      this.responseData=res.data;
      //console.log(this.responseData)
      this.responseData.forEach(element => {
        labelArray =  element.labels
      dataArray =element.events
      //thresholdLevel=element.thresholdLevel
      const a={
        label: element.parameter,
        data: dataArray,
        fill: false,
        borderColor: this.getRandomColor(element.parameter),
        hidden: false
      }
      datasets.push(a);
      }
       
      );
      //console.log(datasets)
      this.data = {
        labels: labelArray,
        datasets:datasets
      }
      // labelArray =  this.responseData.labels
      // dataArray =this.responseData.events
      // thresholdLevel=this.responseData.thresholdLevel
      // this.data = {
      //   labels: labelArray,
      //   datasets: [
      //     {
      //       label: "Parameters",
      //       data: dataArray,
      //       fill: false,
      //       borderColor: '#4bc0c0',
      //       hidden: false
      //     },
      //     {
      //       label: "Threshold Level",
      //       data: thresholdLevel,
      //       fill: false,
      //       borderColor: '#f44336',
      //       hidden: false
      //     }
      //   ]
      // }
    }
   
  
    })
  
   
  
  }

  getRandomColor(string) {
    var colors = ['green', 'blue', 'orange', 'yellow','#4bc0c0'];
    //var color = Math.floor(0x1000000 * Math.random()).toString(16);
    //return '#' + ('000000' + color).slice(-6);
    return  colors[Math.floor(Math.random() * colors.length)];
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
interface ResponseGraph {
  labels: string[],
  events:number[],
  parameter:string
    
 // code: number;
}