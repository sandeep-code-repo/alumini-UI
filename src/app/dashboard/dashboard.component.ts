import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../services/config/config.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { UserService } from '../services/user/user.service';
import {Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  standardNg;
  parametername;
  activetrue:boolean;
  inactivefalse:boolean;
  company:any;
  city:any;
  district:any;
  stateName:any;
  industryCategory:any;
  calendar:any=[];
  monitoringStation:any;
  parameterMoniter:any;
  powerplant:any;
  sortedData: any;
  //parameter: any;
  data: any;
  //value: string[];
  //lineChartLabels: any[];
  //cod:any;
  parameterCode:any;
  value=['11/11 12.26', '11/11 18.26'];
  public lineChartData: ChartDataSets[] = [
    { data: [100,97,88,10,78,33,10,0], label: 'Series A' },
  ];
  private eventsOnChartLimit = 50;
  countEventsChartType = "line";
  public lineChartLabels: Label[] ;//= ['11/11 12.26', '11/11 18.26', '11/11 24.26', '12/11 12.26', '12/11 18.26', '12/11 24.26', '13/11 12.26'];
  
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
    
  
    parameter:any[]=[
      //{"parameterName":"CEMS1_DRI KILN 3-4","parameterCode":"NO2","unit":"mg/Nm3","limit":"0-100","range":"0-1000","recordedTime":"2020-11-13 21:16:00.0","recordedLevel":"13.36","thresholdLevel":"0.00","aggregation":"1Hr","stationName":"Station 1","analyzer":"AAQ","parameterStatus":"Active"},{"parameterName":"CEMS2_DRI PKCS 5-7","parameterCode":"PM","unit":"mg/Nm3","limit":"0-100","range":"0-1000","recordedTime":"2020-10-11 23:12:00.0","recordedLevel":"6.73","thresholdLevel":"0.00","aggregation":"1Hr","stationName":"Station 2","analyzer":"Stack","parameterStatus":"Active"},{"parameterName":"CEMS3_DRI NTFD 6-8","parameterCode":"PH","unit":"mg/Nm3","limit":"0-100","range":"0-1000","recordedTime":"2020-08-26 11:24:00.0","recordedLevel":"7.09","thresholdLevel":"0.00","aggregation":"1Hr","stationName":"Station 3","analyzer":"Water","parameterStatus":"Active"}
     ];

     public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

     standard(id,name,range)
  {
    
    this.parameterCode=id;
    this.parametername=name;
    this.standardNg=range;
    //alert(id);
  }


 
    constructor(private router: Router,private userService:UserService) { }
  
    ngOnInit(): void {
      // this.data=this.parameter;
  const dashboard = this.userService.homepage().subscribe(data=>{
   
   // alert(data.regstatus);
    if(data.apiStatus.message === 'success') 
    {
  
  
   //  this.sortedData=JSON.stringify(data.data.realParameterInfo);
     //this.parameter=this.sortedData;
     //alert(this.parameter);
  
     this.sortedData=data.data;
     this.parameter=data.data.realParameterInfo;
     this.data=this.parameter;
     //this.data=this.data.stationName;
     //alert(JSON.stringify(data.data));
    // this.plant_info=data.data;
    
    //console.log(data.data);

// data bind graph 
const graph = this.userService.home_page_graph_bind().subscribe(data=>{
 
  //alert(data.apiStatus.message);
  if(data.apiStatus.message === 'success') 
  {
 //alert(JSON.stringify(data.data.labels));
 this.lineChartLabels=data.data.labels;

}});
    
      //alert(JSON.stringify(data.data.plantName));
      this.powerplant=data.data.plantName;
      
      this.company=data.data.parameter;

     //alert(JSON.stringify(data.data.city));
     this.city=data.data.city;

     //alert(JSON.stringify(data.data.state));
     this.district=data.data.district;

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
  
  });
  
  
}  
active(Value:Boolean)
{ 
  this.sortedData = this.parameter.filter((val)=> val.parameterStatus===true)
  //Searched Data
  console.log(this.sortedData);
  this.parameter=this.sortedData;
 
  this.parameter=this.data;
 
  //alert(Value);
}
Inactive(Value:Boolean)
{
  this.sortedData = this.parameter.filter((val)=> val.parameterStatus===false)
  //Searched Data
  console.log(this.sortedData);
  this.parameter=this.sortedData;
 // alert('inactive');
}

    applyFilter(Value: string) {
   
      this.sortedData = this.parameter.filter((val)=> val['stationName'].includes(Value))
      //Searched Data
      console.log(this.sortedData);
      this.parameter=this.sortedData;
      if(Value=='')
      {
        
        this.parameter = this.data;
      }
      }
      
    }
    

    
