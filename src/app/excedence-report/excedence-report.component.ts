import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { UserService } from '../services/user/user.service';
//import {GlobalConstants} from '../common/global';
import * as CanvasJS from '../../assets/js/canvas.min';
import * as XLSX from 'xlsx';
import { jsPDF } from "jspdf";
import { ITabledata } from '../model/tableData'
import { LocalServiceService } from '../services/common/local-service.service';
import { StationInfoMapper, Industry, PlantInfo } from '../model/industry.model';
import { IndustryService } from '../services/user/industry.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FilterChart } from '../model/filterchart.model';
import { DatePipe } from '@angular/common';
import { ExcedenceModel } from '../model/excedence.model';

@Component({
  selector: 'app-excedence-report',
  templateUrl: './excedence-report.component.html',
  styleUrls: ['./excedence-report.component.scss'],providers:[DatePipe]
})
export class ExcedenceReportComponent implements OnInit {

tableData:ITabledata[]
  parameter; chart: any = [];
  powerplant; blob: any;
  public dateFrom: Date;
  public dateTo: Date;
  public minDate: Date;
  public maxDate: Date;
  public filterOption: ChartFilterOption[];
  
  
  profilename: string;
  stationList:StationInfoMapper[]=[];
  plantInfo:PlantInfo
  industryData:Industry;
  paramList:any[]
  filterOptionForm: FormGroup;
  model=new ExcedenceModel("","","",new Date(),new Date());
 submitted = false;
  constructor(private router: Router, public datepipe: DatePipe,private formBuilder: FormBuilder, private userService: UserService,private industryService:IndustryService,private storageService:LocalServiceService) { }

  ngOnInit(): void {
   
    if(localStorage.isLogin){
      
      this.profilename=this.storageService.getJsonValue('loggedInUserData').userName;
     }
   
    this.industryService.getIndustryData(this.profilename).subscribe(res =>{
      if(res.apiStatus.message === 'success') 
      {
        this.industryData=res.data;
       this.plantInfo = this.industryData.plantInfo;
        this.stationList=this.industryData.stationInfoMapper
      }
     });
  }
  addParam(){
  this.paramList=[]
  this.model.station.forEach(element => {
    element.parameterInfo.forEach(element => {
      this.paramList.push(element)
      
    });
   
  });
  }
  excel() {
    this.downloadAsExcel({ filename: "chart-data", chart: this.chart });
  }

  filterData:FilterChart;
  fetchSmsdata() {
    var pararmeters=new String()
    var stations=new String()
    this.model.param.forEach(element => {
    
      pararmeters+=element.paramter+",";
   
  
  });
  this.model.station.forEach(element => {
    
    stations+=element.stationInfo.stationId+",";
 

});

    this.filterData=
    {
      
      fromDate: this.datepipe.transform(this.model.dateFrom,'yyyy-MM-dd'),
      toDate: this.datepipe.transform(this.model.dateTo, 'yyyy-MM-dd'),
      plantId:  this.profilename,
      stationId: stations.replace(/,(\s+)?$/, ''),
      parameter: pararmeters.replace(/,(\s+)?$/, '')
    }
    this.userService.gettableData(this.filterData).subscribe(result => {
  
      this.tableData= result.data
    })
    
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
  goback() {
    this.router.navigateByUrl("/regdetails");
  }
}
interface ChartFilterOption {
  name: string;
 // code: number;
}
