import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FilterChart } from '../model/filterchart.model';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss'],
  providers:[DatePipe]
})
export class LinechartComponent implements OnInit {

  public options: any;
  public data: any;
  public dateFrom: Date;
  public dateTo: Date;
  public filterOption: ChartFilterOption[];
  public selectedOption: ChartFilterOption;
  filterData:FilterChart
  responseData;
  view;
  showTime:Boolean;
  parameterOption: any[];
  stationOption:any[]
  constructor(private userService: UserService,public datepipe: DatePipe) { }

  populateChart() {
    this.selectionChange(this.selectedOption, this.dateFrom, this.dateTo)
  }
  changeDatepicker(){
    
    const selected:any=this.selectedOption
    debugger
  switch (selected) {
    case "Monthly":
      {
        //this.view="month"
        this.showTime=false;
        break;
      }
      
      case "Daily":
      {
        this.showTime=false;
        break;
      }
        
    default:{
      this.showTime=true;
      break;
    }
      
  }
}
  selectionChange(chartType: any, dateRangeFrom: Date, dateRangeTo: Date) {
    var labelArray: string[];
    var dataArray: number[];
   
    this.filterData=
    {frequency: chartType,
    fromDate: this.datepipe.transform(dateRangeFrom, 'yyyy-MM-dd hh:mm:ss'),
    toDate: this.datepipe.transform(dateRangeTo, 'yyyy-MM-dd hh:mm:ss'),
    plantId: "hindalco_lpng",
    stationId: "CEMS-5",
    parameter: "PM"
    }
    
   
    this.userService.getTrendsGraphdata(this.filterData).subscribe(res=>{
    
			if(res.apiStatus.message === 'success') 
    {
      this.responseData=res.data;
      labelArray =  this.responseData.labels
      dataArray =this.responseData.events
      this.data = {
        labels: labelArray,
        datasets: [
          {
            label: "Test Label",
            data: dataArray,
            fill: false,
            borderColor: '#4bc0c0',
            hidden: false
          }
        ]
      }
    }
   
  
    })
  
   
  
  }


  ngOnInit(): void {
    this.filterOption = [
      {name: '1 Minute'},
      {name: '15 Minute'},
      { name: 'Monthly' },
      { name: 'Daily'},
    ];
this.parameterOption=[ {name: 'PM'},{name: 'ALL'}
 ]
 this.stationOption=[ {name: 'CEMS-5'},{name: 'ALL'}
]
   // this.selectionChange(2, new Date("2019-01-8"), new Date("2019-02-15"))

    this.options = {
      //display labels on data elements in graph
      responsive: false,
      maintainAspectRatio: false,
      plugins: {
        datalabels: {
          display: false,
          align: 'end',
          anchor: 'end',
          borderRadius: 4,
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
interface ChartFilterOption {
  name: string;
 // code: number;
}