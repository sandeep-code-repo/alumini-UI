import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
//import {GlobalConstants} from '../common/global';
import { IndustryService } from '../services/user/industry.service';
import { LocalServiceService } from '../services/common/local-service.service';
import { Industry, StationInfoMapper } from '../model/industry.model';
import { FilterChart } from '../model/filterchart.model';
import { DatePipe } from '@angular/common';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import * as CanvasJS from '../../assets/js/canvas.min';
import * as XLSX from 'xlsx';
import { jsPDF } from "jspdf";
@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.components.scss'],
  providers:[DatePipe]
})
export class TrendsComponent implements OnInit {
  profilename:string; 
  stationList:StationInfoMapper[]=[];
  selectedStation:any;
  selectedParam:any;
  industryData:Industry;
  paramList:any[]
  blob:any;

public filterOption: ChartFilterOption[];
public selectedOption: any;
public options: any;
  public data: any;
  public dateFrom: Date;
  public dateTo: Date;
  public minDate: Date;
  public maxDate: Date;
filterData:FilterChart;
filtersList:FilterChart[]=[]
iCalView:number=1
view: any;
showTime:Boolean;
parameterOption: any[];
stationOption:any[]
  selectedfreq: any;
  allSelected=false;
  //blob: URL;
 
  constructor(private router: Router,public datepipe: DatePipe,private industryService:IndustryService,private storageService:LocalServiceService) { }

  ngOnInit(): void {
    if(localStorage.isLogin){
      //this.isLogin= this.storageService.getJsonValue('isLogin')
      this.profilename=this.storageService.getJsonValue('loggedInUserData').userName;
     }
     
   this.industryService.getIndustryData(this.profilename).subscribe(res =>{
    if(res.apiStatus.message === 'success') 
    {
      this.industryData=res.data;
      this.stationList=this.industryData.stationInfoMapper
    }
   });
   
   this.filterOption = [
    {name: '1 Minute'},
    {name: '15 Minute'},
    { name: 'Monthly' },
    { name: 'Daily'},
  ];

  let today = new Date();
let month = today.getMonth()+3;
this.maxDate = new Date();
this.maxDate.setMonth(month);
this.minDate = new Date();
this.minDate.setMonth(today.getMonth()-3)
}

changeDatepicker(){
    //alert("xcv")
  const selected:any=this.selectedOption
  console.log(selected)
  
switch (selected) {
 
  case "Monthly":
    {
      this.iCalView=2;
      //this.view="month"
      this.showTime=false;
      break;
    }
    
    case "Daily":
    {
      this.iCalView=1
      this.showTime=false;
      break;
    }
      
  default:{
    this.iCalView=1
    this.showTime=true;
    break;
  }
    
}
} 
addParam(){
  
  this.paramList=[]
//   if(this.selectedStation=='ALL Stations')
  
//   //this.stationList.filter(item => item === 'parameterInfo');
//  this.stationList.forEach(element => {
//     element.parameterInfo.forEach(param=>{ this.paramList.push(param)})
   
//   });
//   else

this.selectedStation.forEach(element => {
  element.parameterInfo.forEach(element => {
    this.paramList.push(element)
    //console.log(this.paramList)
  });
 
});
}
 
populateChart(){
  var pararmeters=new String()
   this.selectedfreq=this.selectedOption
  console.log(this.selectedParam)
  console.log(this.selectedStation)
  
   this.filtersList=[]
   this.selectedParam.forEach(element => {
    // element.forEach(element => {
      pararmeters+=element.paramter+",";
    // });
  
  });
   this.selectedStation.forEach(satation => {
    
    this.filterData=
    {
      frequency: this.selectedfreq,
      fromDate: this.datepipe.transform(this.dateFrom,'yyyy-MM-dd hh:mm:ss'),
      toDate: this.datepipe.transform(this.dateTo, 'yyyy-MM-dd hh:mm:ss'),
      plantId: "hindalco_lpng",
      stationId: satation.stationInfo.stationId,
      parameter: pararmeters.replace(/,(\s+)?$/, '')
    }
    this.filtersList.push(this.filterData)
      console.log(this.filtersList)
  });
  //  if(this.selectedStation=='ALL Stations'){
  //   this.stationList.forEach(element => {
  //     //console.log(element.parameterInfo)
  //     this.filterData=
  //   {
  //     frequency: this.selectedfreq,
  //   fromDate: this.datepipe.transform(this.dateFrom,'yyyy-MM-dd hh:mm:ss'),
  //   toDate: this.datepipe.transform(this.dateTo, 'yyyy-MM-dd hh:mm:ss'),
  //   plantId: "hindalco_lpng",
  //   stationId: element.stationInfo.stationId,
  //   parameter: pararmeters.replace(/,(\s+)?$/, '')
  //   }
  //   this.filtersList.push(this.filterData)
  //   });
  //  }
  // else{
  
    //console.log(this.filtersList)
  // }
}
  goback() {
    this.router.navigateByUrl("/regdetails");
  }

  printCanvas(id) {

    if (id == 'print') {
      var canvas = <HTMLCanvasElement>$("#chartContainer .canvasjs-chart-canvas").get(0);
      var dataURL = canvas.toDataURL();
      // var canvas = <HTMLCanvasElement>  document.querySelector("#random-chart");
      var canvas_img = canvas.toDataURL("image/png", 1.0); //JPEG will not match background color

      var pdf = new jsPDF('landscape', 'in', 'letter'); //orientation, units, page size
      pdf.addImage(canvas_img, 'png', .5, 1.75, 10, 5); //image, type, padding left, padding top, width, height
      pdf.autoPrint(); //print window automatically opened with pdf
      this.blob = pdf.output("bloburl");
      window.open(this.blob);
    }


    if (id == 'chartContainer') {
      var canvas = <HTMLCanvasElement>$("#chartContainer .canvasjs-chart-canvas").get(0);
      var dataURL = canvas.toDataURL();





      //var canvas =<HTMLCanvasElement>  document.querySelector("#chartContainer");
      var canvas_img = canvas.toDataURL("image/png", 1.0); //JPEG will not match background color
      var pdf = new jsPDF('landscape', 'in', 'letter'); //orientation, units, page size
      pdf.addImage(canvas_img, 'png', .5, 1.75, 10, 5); //image, type, padding left, padding top, width, height

      this.blob = pdf.output("bloburl");
      window.open(this.blob);

    }

    if (id == 'excel') {


      var canvas = <HTMLCanvasElement>document.querySelector("#random-chart");

      var canvas = <HTMLCanvasElement>$("#chartContainer .canvasjs-chart-canvas").get(0);
      var dataURL = canvas.toDataURL();

      var dataURL = canvas.toDataURL("image/jpeg", 1.0);

      // this.downloadImage(dataURL, 'my-canvas.jpeg');



      this.downloadAsExcel({
        filename: "chart-data",
        chart: dataURL
      })



    }



  }

  pdf() {

  }

  downloadAsExcel(args) {
    var dataPoints, filename;
    filename = args.filename || 'chart-data';

    dataPoints = args.chart.data[0].dataPoints;
    dataPoints.unshift({ x: "X Value", y: "Y-Value" });
    var ws = XLSX.utils.json_to_sheet(dataPoints, { skipHeader: true, dateNF: 'YYYYMMDD HH:mm:ss' });
    if (!ws['!cols']) ws['!cols'] = [];
    ws['!cols'][0] = { wch: 17 };
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, filename);
    XLSX.writeFile(wb, filename + ".xlsx");
  }
 
}
interface ChartFilterOption {
  name: string;
 // code: number;
}
