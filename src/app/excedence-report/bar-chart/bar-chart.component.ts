import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FilterChart } from 'src/app/model/filterchart.model';
import { UserService } from 'src/app/services/user/user.service';
import { ExcelService } from '../../services/common/excel.service';
import * as FileSaver from 'file-saver';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';  
const EXCEL_EXTENSION = '.xlsx'; 
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  providers:[DatePipe]
})

export class BarChartComponent implements OnInit {
  dataSource: any;
  excel=[];
  @Input() chartData:Param[];
  @Input() filters:FilterChart;
  public chartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          // stepSize: 10,
          beginAtZero: true
        }
      }]
    }
  }
 
  dateLabel: any[];
  constructor(private userService: UserService,public datepipe: DatePipe,private excelService:ExcelService) {
    
  }

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

  ngOnInit(): void {

   
  }
  ngOnChanges(){
    
    this.prepareChart()
  
  }
  downloadExcelreport(){
    this.userService.getExcelReportSMS(this.filters).subscribe(result => {
      FileSaver.saveAs(result,'sms_report_' + new  Date().getTime() + EXCEL_EXTENSION);  
     
    })
    
   
  }
  prepareChart(){
    this.dateLabel = this.chartData.map(emp => this.datepipe.transform(emp.createdDt,'dd-MM-yyyy hh:mm:ss'))
    var outObject = this.chartData.reduce(function(a, param) {
     
     
      let estKey = (param['parameter']); 
    
      (a[estKey] ? a[estKey] : (a[estKey] = null || [])).push(param);
      return a;
    }, {});
  const  chObj=[] ;
    for (var key in outObject) {
      const temp= new ChartObj();
      temp.label=key
      temp.backgroundColor=this.getRandomColor(),
      temp.barThickness= 16
      outObject[key].forEach(element => {
        temp.data.push(element.exceedence)
        
      });
      chObj.push(temp);
    }
      this.dataSource = {
        labels: this.dateLabel,
        datasets: chObj
      }; 
    
  }
  getRandomColor() {
    var colors = [ 'orange','#4bc0c0','#29215c','#f66342','#63256a','yellow','pink'];
    return colors[Math.floor(Math.random() * colors.length)];
    }
}
export interface Param{
      createdDt?:string
      exceedence: string,
      parameter: string,
      stationName?: string,
      
     
}
export class ChartObj{
  label:string
  backgroundColor: string
  data:any[]=[] 
  barThickness:number
  constructor(){}  
}