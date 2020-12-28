import { Component, OnInit } from '@angular/core';
import { FilterChart } from '../model/filterchart.model';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
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
  constructor(private userService: UserService) { }

  populateChart() {
    this.selectionChange(this.selectedOption, this.dateFrom, this.dateTo)
  }
  selectionChange(chartType: any, dateRangeFrom: Date, dateRangeTo: Date) {
    var labelArray: string[];
    var dataArray: number[];
    this.filterData=
    {frequency: chartType,
    fromDate: "2020-11-12 11:17:03",
    toDate: "2020-11-14 11:17:03",
    plantId: "hindalco_lpng",
    stationId: "CEMS-5",
    parameter: "PM"
    }
    this.userService.getTrendsGraphdata(this.filterData).subscribe(res=>{
			if(res.apiStatus.message === 'success') 
    {
    this.responseData=res.data;
   
    }
    })
    labelArray =  this.responseData.labels
    dataArray =this.responseData.events
    // switch (chartType) {
    //   case 1: {

    //     //var mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //     labelArray = //mlist.slice(dateRangeFrom.getMonth(), dateRangeTo.getMonth() + 1);
    //     this.responseData.labels
    //     dataArray = //this.getRandomNumberBetween(10, 100, labelArray.length);
    //     this.responseData.events
    //     break;
    //   }
    //   case 2: {
    //     var one_day = 1000 * 60 * 60 * 24
    //     var noOfDays = Math.round(dateRangeTo.getTime() - dateRangeFrom.getTime()) / (one_day);
    //     var iCount = 0;
    //     labelArray = new Array(0);
    //     var futureDate = dateRangeFrom;
    //     for (iCount = 0; iCount < noOfDays; iCount++) {
    //       futureDate.setTime(futureDate.getTime() + one_day);
    //       labelArray.push((String)(futureDate.getDate()));
    //     }
    //     dataArray = this.getRandomNumberBetween(10, 100, noOfDays);
    //     break;
    //   }
    //   default: {
    //     break;
    //   }
    // }
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


  getRandomNumberBetween(min: number, max: number, len: number): number[] {
    var returnVals = new Array(0);
    var iCount: number;
    iCount = 0;
    for (iCount = 0; iCount < len; iCount++) {
      returnVals.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return returnVals;
  }
  ngOnInit(): void {
    this.filterOption = [
      {name: '1 Minute', code: 1},
      {name: '15 Minutes', code: 2},
      { name: 'Monthly', code: 4 },
      { name: 'Daily', code: 3 },
    ];

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
  code: number;
}