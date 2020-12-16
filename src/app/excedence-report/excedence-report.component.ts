import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { UserService } from '../services/user/user.service';
//import {GlobalConstants} from '../common/global';
import * as CanvasJS from '../../assets/js/canvas.min';
import * as XLSX from 'xlsx'; 
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-excedence-report',
  templateUrl: './excedence-report.component.html',
  styleUrls: ['./excedence-report.component.css']
})
export class ExcedenceReportComponent implements OnInit {

  profilename; parameter;chart:any=[];
  powerplant;blob:any;
  stationname="CEMS1_DRI KILN 1-2";city;company;stateName;industryCategory;calendar;monitoringStation;parameterMoniter;
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
   
    

  //this.profilename=GlobalConstants.siteTitle;

  const dashboard = this.userService.homepage().subscribe(data=>{
    debugger;
   // alert(data.regstatus);
    if(data.apiStatus.message === 'success') 
    {
  //call graph
      
      this.fetch();
  
     
     this.parameter=data.data.realParameterInfo;
    
    
     
    console.log(data.data);

     //alert(JSON.stringify(data.data.plantName));
     this.company=data.data.district;
  
     this.powerplant=data.data.plantName;

    //alert(JSON.stringify(data.data.city));
    this.city=data.data.city;

     //alert(JSON.stringify(data.data.state));
     this.stateName=data.data.state;

     //alert(JSON.stringify(data.data.industryCategory));
     this.industryCategory=data.data.industryCategory;


     //alert(JSON.stringify(data.data.calendar));
     this.calendar=data.data.realParameterInfo;
     
     
 
     //alert(JSON.stringify(data.data.monitoringStation));
     this.monitoringStation=data.data.countStation;

     //alert(JSON.stringify(data.data.parameterMoniter));
     this.parameterMoniter=data.data.countParameter;

    }
  })

  
}
  
  PM()
  {
   
    $('#PM').addClass('c3-legend-item-hidden');
    $('#SO2').removeClass('c3-legend-item-hidden');
this.fetch_pm();

  }

  SO2()
  {
    this.fetch_so2()
    $('#SO2').addClass('c3-legend-item-hidden');
    $('#PM').removeClass('c3-legend-item-hidden');
  }

  excel()
  {
    this.downloadAsExcel({ filename: "chart-data", chart: this.chart });
  }


  fetch()
  {
    
    
    var d = new Date();
var strDate = d.getFullYear() + "/" + (d.getMonth()-1) + "/" + d.getDate();
var strDate1 = d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate();
$("#fromdate").val(strDate);

$("#todate").val(strDate1);
alert(strDate1);
   
    $(".card-body").css("display","block")  
    this.chart = new CanvasJS.Chart("chartContainer",{
      axisY:
      {
        gridThickness:0,
      
    
      },
      theme: "light1", // "light2", "dark1", "dark2"
      title: {
        text: ""
      },
      data: [
        {
          type: "spline", // Change type to "bar", "area", "spline", "pie",etc.
          dataPoints: [
            {  y: 10.0},
            {  y: 10.15 },
            { y: 10.56 },
            {  y: 80.0 },
            {  y: 80.20 },
            {  y: 10.0},
            {  y: 10.25 },
            { y: 25.0 },
            {  y: 80.15 },
            {  y: 28.20 },
            {  y: 10.0},
            {  y: 20.25 },
            {  y: 25.56 },
            {  y: 80.23 },
            {  y: 28.20 }
          ],
          
          
        },
        {
          type: "area", // Change type to "bar", "area", "spline", "pie",etc.
          dataPoints: [
            { label: "2/12 15:23", y: 1},
            { label: "2/12 21:23", y: 1 },
            { label: "3/12 03:16", y: 1},
            { label: "3/12 09:12", y: 1},
            { label: "3/12 09:21", y: 1},    
            { label: "2/12 15:23", y: 1},
            { label: "2/12 21:23", y: 1 },
            { label: "3/12 03:16", y: 1},
            { label: "3/12 09:12", y: 1},
            { label: "3/12 09:21", y: 1},
            { label: "2/12 15:23", y: 1},
            { label: "2/12 21:23", y: 1 },
            { label: "3/12 03:16", y: 1},
            { label: "3/12 09:12", y: 1},
            { label: "3/12 09:21", y: 1}
    
          ],
          
          
        }
      ],
    
        
      
    });
   this.chart.render();

  
  
  }

  fetch_pm()
  {
    
    
   
    $(".card-body").css("display","block")  
    this.chart = new CanvasJS.Chart("chartContainer",{
      axisY:
      {
        gridThickness:0,
      
    
      },
      theme: "light1", // "light2", "dark1", "dark2"
      title: {
        text: ""
      },
      data: [
        {
         
          
        },
        {
          type: "area", // Change type to "bar", "area", "spline", "pie",etc.
          dataPoints: [
            { label: "2/12 15:23", y: 0},
            { label: "2/12 21:23", y: 0 },
            { label: "3/12 03:16", y: 0},
            { label: "3/12 09:12", y: 0},
            { label: "3/12 09:21", y: 0},    
            { label: "2/12 15:23", y: 0},
            { label: "2/12 21:23", y: 0 },
            { label: "3/12 03:16", y: 0},
            { label: "3/12 09:12", y: 0},
            { label: "3/12 09:21", y: 0},
            { label: "2/12 15:23", y: 0},
            { label: "2/12 21:23", y: 0 },
            { label: "3/12 03:16", y: 0},
            { label: "3/12 09:12", y: 0},
            { label: "3/12 09:21", y: 0}
    
          ],
          
          
        }
      ],
    
        
      
    });
   this.chart.render();

  
  
  }

  fetch_so2()
  {
    
    
   
    $(".card-body").css("display","block")  
    this.chart = new CanvasJS.Chart("chartContainer",{
      axisY:
      {
        gridThickness:0,
      
    
      },
      theme: "light1", // "light2", "dark1", "dark2"
      title: {
        text: ""
      },
      data: [
        {
          type: "spline", // Change type to "bar", "area", "spline", "pie",etc.
          dataPoints: [
            { label: "2/12 10:23", y: 10.0},
            { label: "2/12 11:23", y: 10.15 },
            {label: "2/12 12:23", y: 10.56 },
            { label: "2/12 18:23", y: 80.0 },
            { label: "2/12 5:23", y: 80.20 },
            { label: "2/12 15:23", y: 10.0},
            { label: "2/12 15:23", y: 10.25 },
            {label: "2/12 15:23", y: 25.0 },
            {label: "2/12 15:23",  y: 80.15 },
            {label: "2/12 15:23",  y: 28.20 },
            { label: "2/12 15:23", y: 10.0},
            { label: "2/12 15:23", y: 20.25 },
            { label: "2/12 15:23", y: 25.56 },
            { label: "2/12 15:23", y: 80.23 },
            { label: "2/12 15:23", y: 28.20 }
          ],
          
          
        },
       
      ],
    
        
      
    });
   this.chart.render();

  
  
  }

  printCanvas(id)  
  {  
    
  if(id=='print')
  {
    var canvas =<HTMLCanvasElement>  $("#chartContainer .canvasjs-chart-canvas").get(0);
    var dataURL = canvas.toDataURL();
   // var canvas = <HTMLCanvasElement>  document.querySelector("#random-chart");
    var canvas_img = canvas.toDataURL("image/png",1.0); //JPEG will not match background color
   
    var pdf = new jsPDF('landscape','in', 'letter'); //orientation, units, page size
    pdf.addImage(canvas_img, 'png', .5, 1.75, 10, 5); //image, type, padding left, padding top, width, height
    pdf.autoPrint(); //print window automatically opened with pdf
    this.blob = pdf.output("bloburl");
    window.open(this.blob);
  }
  
  
  if(id=='chartContainer')
  {
    var canvas =<HTMLCanvasElement>  $("#chartContainer .canvasjs-chart-canvas").get(0);
    var dataURL = canvas.toDataURL();
        
    
     
  
  
   //var canvas =<HTMLCanvasElement>  document.querySelector("#chartContainer");
    var canvas_img = canvas.toDataURL("image/png",1.0); //JPEG will not match background color
   var pdf = new jsPDF('landscape','in', 'letter'); //orientation, units, page size
   pdf.addImage(canvas_img, 'png', .5, 1.75, 10, 5); //image, type, padding left, padding top, width, height
    
    this.blob = pdf.output("bloburl");
   window.open(this.blob);
    
  }
    
  if(id=='excel')
  {
  
    
    var canvas = <HTMLCanvasElement>  document.querySelector("#random-chart");
    
    var canvas =<HTMLCanvasElement>  $("#chartContainer .canvasjs-chart-canvas").get(0);
    var dataURL = canvas.toDataURL();
  
    var dataURL = canvas.toDataURL("image/jpeg", 1.0);
  
   // this.downloadImage(dataURL, 'my-canvas.jpeg');
  
  
   
   this.downloadAsExcel({
    filename: "chart-data",
    chart: dataURL
  })
  
  
   
  }
  
    
   
  }
  
pdf()
{

}

  downloadAsExcel(args) {
    var dataPoints, filename;  
    filename = args.filename || 'chart-data';
  
    dataPoints = args.chart.data[0].dataPoints;
    dataPoints.unshift({x: "X Value", y: "Y-Value"});
    var ws = XLSX.utils.json_to_sheet(dataPoints, {skipHeader:true, dateNF: 'YYYYMMDD HH:mm:ss'});
    if(!ws['!cols']) ws['!cols'] = [];
    ws['!cols'][0] = { wch: 17 };
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, filename);
    XLSX.writeFile(wb, filename + ".xlsx");
  }
  goback() {
    this.router.navigateByUrl("/regdetails");
  }
}
