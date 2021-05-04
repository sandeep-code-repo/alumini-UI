import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { UserService } from '../services/user/user.service';
import { jsPDF } from "jspdf";
import * as XLSX from 'xlsx';
import * as CanvasJS from '../../../src/assets/js/canvas.min';
import { LocalServiceService } from '../services/common/local-service.service';
//import{GlobalConstants} from '../common/global'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  profilename: string;
  fileName = 'ExcelSheet.xlsx';
  blob: any;
  k = 0;
  stationname: string;
  standardNg;
  parametername;
  activetrue: boolean;
  inactivefalse: boolean;
  company: any;
  city: any;
  stateName: any;
  industryCategory: any;
  calendar: any = [];
  monitoringStation: any;
  parameterMoniter: any;
  powerplant: any;
  sortedData: any;

  //parameter: any;
  data: any;
  //value: string[];
  //lineChartLabels: any[];
  //cod:any;
  parameterCode: any;

  public lineChartData: ChartDataSets[] = [

    {
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Series A'
    }, { data: [54, 5, 8, 3, 78, 33, 10, 0], label: 'Series B' },
  ];
  countEventsChartType = "line";
  public lineChartLabels: Label[];//= ['11/11 12.26', '11/11 18.26', '11/11 24.26', '12/11 12.26', '12/11 18.26', '12/11 24.26', '13/11 12.26'];

  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'white',
    },
  ];


  parameter: any[] = [
    //{"parameterName":"CEMS1_DRI KILN 3-4","parameterCode":"NO2","unit":"mg/Nm3","limit":"0-100","range":"0-1000","recordedTime":"2020-11-13 21:16:00.0","recordedLevel":"13.36","thresholdLevel":"0.00","aggregation":"1Hr","stationName":"Station 1","analyzer":"AAQ","parameterStatus":"Active"},{"parameterName":"CEMS2_DRI PKCS 5-7","parameterCode":"PM","unit":"mg/Nm3","limit":"0-100","range":"0-1000","recordedTime":"2020-10-11 23:12:00.0","recordedLevel":"6.73","thresholdLevel":"0.00","aggregation":"1Hr","stationName":"Station 2","analyzer":"Stack","parameterStatus":"Active"},{"parameterName":"CEMS3_DRI NTFD 6-8","parameterCode":"PH","unit":"mg/Nm3","limit":"0-100","range":"0-1000","recordedTime":"2020-08-26 11:24:00.0","recordedLevel":"7.09","thresholdLevel":"0.00","aggregation":"1Hr","stationName":"Station 3","analyzer":"Water","parameterStatus":"Active"}
  ];

  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];


  constructor(private router: Router, private userService: UserService, private storageService: LocalServiceService) { }

  ngOnInit(): void {
   
    if (localStorage.isLogin) {
      //this.isLogin= this.storageService.getJsonValue('isLogin')
      this.profilename = this.storageService.getJsonValue('loggedInUserData').userName;
    }

    // this.data=this.parameter;
    this.userService.homepage(this.profilename).subscribe(data => {
     
      if (data.apiStatus.message === 'success') {
        
        this.sortedData = data.data;
        this.parameter = data.data.realParameterInfo;
        this.data = this.parameter;
       
        // data bind graph 
        this.userService.home_page_graph_bind(this.profilename).subscribe(data => {

          if (data.apiStatus.message === 'success') {
            //alert(JSON.stringify(data.data.labels));
            this.lineChartLabels = data.data.labels;
            console.log(this.lineChartLabels)
          }
          else
          this.lineChartLabels=[]
          
        });
        
        this.graph('AAQMS-1 KPMI 3-4 NO2');
        this.company = data.data.district;
        this.powerplant = data.data.plantName;
        this.city = data.data.city;
        this.stateName = data.data.state;
        this.industryCategory = data.data.industryCategory;
        this.calendar = data.data.realParameterInfo;
        this.monitoringStation = data.data.countStation;
        this.parameterMoniter = data.data.countParameter;
      }

    });


  }
  active(Value: Boolean) {
    this.sortedData = this.parameter.filter((val) => val.parameterStatus === true)

    this.parameter = this.sortedData;

    this.parameter = this.data;


  }
  Inactive(Value: Boolean) {
    this.sortedData = this.parameter.filter((val) => val.parameterStatus === false)
    //Searched Data

    this.parameter = this.sortedData;

  }

  previous(id) {
    $('#' + id).prop("disabled", "true")
    alert('No Data Found');

  }
  current() {
    // alert('current');
  }


  graph(name) {
    this.stationname = name;
    let chart = new CanvasJS.Chart("chartContainer", {
      axisY:
      {
        gridThickness: 0,
        // valueFormatString: "#,###"

      },
      axisX: {
        valueFormatString: "Date Time",
        labelFormatter: function (e) {
          return CanvasJS.formatDate(e.value, "DD/MM HH:mm");
        }
      },
      theme: "light1", // "light2", "dark1", "dark2"
      title: {
        text: ""
      },
      data: [
        {
          type: "line", toolTipContent: "<strong>{label}{t}</strong>,<br> {name} {y}", showInLegend: true,
          name: name,
          // Change type to "bar", "area", "spline", "pie",etc.
          dataPoints: [
            { label: '04/01 ', x: new Date(2020, 12, 4, 1, 15, 0), t: '1:15', y: 10, stationname: this.stationname },
            { label: '04/01 ', x: new Date(2020, 12, 4, 1, 30, 0), t: '1:30', y: 10, stationname: this.stationname },
            { label: '04/01 ', x: new Date(2020, 12, 4, 1, 45, 0), t: '1:45', y: 10, stationname: this.stationname },
            { label: '04/01 ', x: new Date(2020, 12, 4, 2, 0, 0), t: '2:00', y: 20, stationname: this.stationname },
            { label: '04/01 ', x: new Date(2020, 12, 4, 2, 15), t: '2:15', y: 10, stationname: this.stationname },
            { label: '04/01 ', x: new Date(2020, 12, 4, 2, 30), t: '2:30', y: 10, stationname: this.stationname },
            { label: '04/01 ', x: new Date(2020, 12, 4, 3, 15), t: '3:15', y: 10, stationname: this.stationname },
            { label: '04/01 ', x: new Date(2020, 12, 4, 3, 30), t: '3:30', y: 20, stationname: this.stationname },
            { label: '04/01 ', x: new Date(2020, 12, 4, 3, 45), t: '3:45', y: 10, stationname: this.stationname },
            { label: '04/01 ', x: new Date(2020, 12, 4, 4, 0), t: '4:00', y: 10, stationname: this.stationname },
            { label: '04/01 ', x: new Date(2020, 12, 4, 4, 15), t: '4:15', y: 10, stationname: this.stationname },
            { label: '04/01 ', x: new Date(2020, 12, 4, 4, 30), t: '4:30', y: 10, stationname: this.stationname },
            { label: '05/01 ', x: new Date(2020, 12, 5, 1, 15), t: '1:15', y: 10, stationname: this.stationname },
            { label: '05/01 ', x: new Date(2020, 12, 5, 1, 30), t: '1:30', y: 10, stationname: this.stationname },
            { label: '05/01 ', x: new Date(2020, 12, 5, 1, 45), t: '1:45', y: 10, stationname: this.stationname },
            { label: '05/01 ', x: new Date(2020, 12, 5, 2, 0), t: '2:00', y: 20, stationname: this.stationname },
            { label: '05/01 ', x: new Date(2020, 12, 5, 2, 15), t: '2:15', y: 10, stationname: this.stationname },
            { label: '05/01 ', x: new Date(2020, 12, 5, 2, 30), t: '2:30', y: 10, stationname: this.stationname },
            { label: '05/01 ', x: new Date(2020, 12, 5, 3, 15), t: '3:15', y: 10, stationname: this.stationname },
            { label: '05/01 ', x: new Date(2020, 12, 5, 3, 30), t: '3:30', y: 20, stationname: this.stationname },
            { label: '05/01 ', x: new Date(2020, 12, 5, 3, 45), t: '3:45', y: 10, stationname: this.stationname },
            { label: '05/01 ', x: new Date(2020, 12, 5, 4, 0), t: '4:00', y: 10, stationname: this.stationname },
            { label: '05/01 ', x: new Date(2020, 12, 5, 4, 15), t: '4:15', y: 10, stationname: this.stationname },
            { label: '05/01 ', x: new Date(2020, 12, 5, 4, 30), t: '4:30', y: 10, stationname: this.stationname },

          ],


        },
        {
          type: "area", // Change type to "bar", "area", "spline", "pie",etc.
          dataPoints: [

            { label: '05/01 ', x: new Date(2020, 12, 5, 1, 15), t: '1:15', y: 1, stationname: this.stationname },
            { label: '05/01 ', x: new Date(2020, 12, 5, 1, 30), t: '1:30', y: 1, stationname: this.stationname },
            { label: '05/01 ', x: new Date(2020, 12, 5, 1, 45), t: '1:45', y: 1, stationname: this.stationname },
            { label: '05/01 ', x: new Date(2020, 12, 5, 2, 0), t: '2:00', y: 1, stationname: this.stationname },
            { label: '05/01 ', x: new Date(2020, 12, 5, 2, 15), t: '2:15', y: 1, stationname: this.stationname },
            { label: '05/01 ', x: new Date(2020, 12, 5, 2, 30), t: '2:30', y: 1, stationname: this.stationname },
            { label: '05/01 ', x: new Date(2020, 12, 5, 3, 15), t: '3:15', y: 1, stationname: this.stationname },
            { label: '05/01 ', x: new Date(2020, 12, 5, 3, 30), t: '3:30', y: 1, stationname: this.stationname },
            { label: '05/01 ', x: new Date(2020, 12, 5, 3, 45), t: '3:45', y: 1, stationname: this.stationname },
            { label: '05/01 ', x: new Date(2020, 12, 5, 4, 0), t: '4:00', y: 1, stationname: this.stationname },
            { label: '05/01 ', x: new Date(2020, 12, 5, 4, 15), t: '4:15', y: 1, stationname: this.stationname },
            { label: '05/01 ', x: new Date(2020, 12, 5, 4, 30), t: '4:30', y: 1, stationname: this.stationname },
          ],


        }

      ],



    });
    chart.render();
  }
  applyFilter(Value: string) {

    this.sortedData = this.parameter.filter((val) => val['stationName'].includes(Value))

    // alert(this.sortedData.length)
    if (this.sortedData.length == 0) {


      this.sortedData = this.parameter.filter((val) => val['stationName'].includes(Value.toString().toUpperCase()))
    }
    if (this.sortedData.length == 0) {
      this.sortedData = this.parameter.filter((val) => val['parameter'].includes(Value))
    }
    if (this.sortedData.length == 0) {


      this.sortedData = this.parameter.filter((val) => val['parameter'].includes(Value.toString().toUpperCase()))
    }

    if (this.sortedData.length == 0) {
      this.sortedData = this.parameter.filter((val) => val['unit'].includes(Value))
    }
    if (this.sortedData.length == 0) {


      this.sortedData = this.parameter.filter((val) => val['unit'].includes(Value.toString().toUpperCase()))
    }
    if (this.sortedData.length == 0) {


      this.sortedData = this.parameter.filter((val) => val['range'].includes(Value.toString().toUpperCase()))
    }

    if (this.sortedData.length == 0) {
      this.sortedData = this.parameter.filter((val) => val['unit'].includes(Value.toString().toUpperCase()))
    }
    if (this.sortedData.length == 0) {
      this.sortedData = this.parameter.filter((val) => val['range'].includes(Value))
    }
    if (this.sortedData.length == 0) {
      this.sortedData = this.parameter.filter((val) => val['range'].includes(Value.toString().toUpperCase()))
    }
    if (this.sortedData.length == 0) {
      this.sortedData = this.parameter.filter((val) => val['recordedLevel'].includes(Value))
    }
    if (this.sortedData.length == 0) {
      this.sortedData = this.parameter.filter((val) => val['recordedLevel'].includes(Value.toString().toUpperCase()))
    }

    this.parameter = this.sortedData;

    if (Value == '') {

      this.parameter = this.data;
    }


  }


  goback() {
    this.router.navigateByUrl("/regdetails");
  }

  mouse_standard(id, name, range, j, t) {
    if (j == 1) {


      // $("#"+j).css("background","red");
      this.k = j;
      $("#" + j).css("font", "bold");
      // $("#"+j).css("background","white");

      $("#" + j).css("background", "red");
      for (let i = 0; i < this.parameter.length; i++) {
        if (j == 1 && i == 1) {
          // alert(name);
          $("#" + j).css("background", "red");
          $("#" + j).attr("disabled", "disabled");
          //$(".heighf").css("color","white");
        }
        else {
          // $(".heighf").css("color","black");
          $("#" + i).css("background", "");
        }
      }
    }
    else {

      this.parameterCode = id;
      this.parametername = name;
      this.standardNg = range;
      this.stationname = t;
    }
  }


  standard(id, name, range, j, t) {



    this.parameterCode = id;
    this.parametername = name;
    this.standardNg = range;
    this.stationname = t;

    

    if (j == 0) {

     
      $("#" + j).css("background", "");
      this.k = j;
      $("#" + j).css("font", "bold");
      
      $("#" + j).css("background", "#1cc88a");
      for (let i = j; i < this.parameter.length; i++) {
        if (j == i) {
          $("#" + j).css("background", "#1cc88a");
         
        }
        else {
         
          $("#" + i).css("background", "");
        }
      }
    }
    else
      if (j == 1) {
        this.parameterCode = '';
        this.parametername = '';
        this.standardNg = '';
        this.stationname = '';

        $("#" + j).css("background", "red");
        this.k = j;
        $("#" + j).css("font", "bold");
       
        $("#" + j).css("background", "red");
        for (let i = 0; i < this.parameter.length; i++) {
          if (j == 1 && i == 1) {
            
            $("#" + j).css("background", "red");
            $("#" + j).attr("disabled", "disabled");
            //$(".heighf").css("color","white");
          }
          else {
            // $(".heighf").css("color","black");
            $("#" + i).css("background", "");
          }
        }
      }
      else {
        this.graph('PH EQMS-1 NCRP 2-3');

        this.k = j;
        $("#" + j).css("font", "bold");
        $("#" + j).css("background", "");
        $("#" + j).css("background", "#1cc88a");

        for (let i = 0; i < this.parameter.length; i++) {
          if (j == i) {
            $("#" + j).css("background", "#1cc88a");
            // $(".heighf").css("color","white");
          }
          else {
            // $(".heighf").css("color","black");
            $("#" + i).css("background", "");
          }
        }

      }


  }


  printCanvas(id) {

    if (id == 'print') {
      var canvas = <HTMLCanvasElement>$("#chartContainer .canvasjs-chart-canvas").get(0);
      var dataURL = canvas.toDataURL();
     
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
    dataPoints = args.chart[0].dataPoints;
    dataPoints.unshift({
      y: "X Value",
      z: "Y-Value"
    });
    var ws = XLSX.utils.json_to_sheet(dataPoints, {
      skipHeader: true,
      dateNF: 'YYYYMMDD HH:mm:ss'
    });
    if (!ws['!cols']) ws['!cols'] = [];
    ws['!cols'][0] = {
      wch: 17
    };
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, filename);
    XLSX.writeFile(wb, filename + ".xlsx");
  }

  downloadImage(data, filename = 'untitled.jpeg') {
    var a = document.createElement('a');
    a.href = data;
    a.download = filename;
    document.body.appendChild(a);
    //a.click();
  }

}



