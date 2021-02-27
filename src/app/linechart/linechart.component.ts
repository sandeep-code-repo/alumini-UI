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
  
  @Input() filterData:FilterChart;
  
  responseData:ResponseGraph[]=[];
  view;

  showTime:Boolean;
  parameterOption: any[];
  stationOption:any[]
  constructor(private userService: UserService) { }

  
  print(chartImage: any) {
    var sBase64 = chartImage.getBase64Image();
    // console.log(sBase64);
    let newWindow;
    newWindow = window.open();
    newWindow.document.write(`
      <html>
        <head>
          <title>Print</title>
        </head>
        <body onload="window.print();window.close()">
        <img src="${sBase64}" />
      </html>`
    );
    newWindow.document.close();
  }

  populateChart() {
    var labelArray: string[];
    var dataArray: number[];
    //var thresholdLevel:number[];
    var  datasets:any[]=[];
 
    this.userService.getTrendsGraphdata(this.filterData).subscribe(res=>{
    
			if(res.apiStatus.message === 'success') 
    {
      this.responseData=res.data;
      
      this.responseData.forEach(element => {
        labelArray =  element.labels
      dataArray =element.events
     
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
     responsive: true,
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