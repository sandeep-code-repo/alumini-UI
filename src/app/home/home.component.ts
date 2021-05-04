import { Component, OnInit } from '@angular/core';
//import { routerTransition } from '../services/config/config.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { UserService } from '../services/user/user.service';
//import {Pipe, PipeTransform} from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  data:any;
  sortedData:any=[];
  plantid:any="1";
  cod:any;

  stationName:any="Hirakud";
  stateName:any="Odisha";
  plantName:any="Power Plant";

  
 
  public lineChartData: ChartDataSets[] = [
    { data: [100,97,88,10,78,33,10,0], label: 'Series A' },
  ];
  private eventsOnChartLimit = 50;
  countEventsChartType = "line";
  public lineChartLabels: Label[] = ['11/11 12.26', '11/11 18.26', '11/11 24.26', '12/11 12.26', '12/11 18.26', '12/11 24.26', '13/11 12.26'];
  
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];

  standard(id)
  {
    
    this.cod=id;
    //alert(id);
  }
   parameter:any[]=[
  {"parameterName":"CEMS1_DRI KILN 3-4","parameterCode":"NO2","unit":"mg/Nm3","limit":"0-100","range":"0-1000","recordedTime":"2020-11-13 21:16:00.0","recordedLevel":"13.36","thresholdLevel":"0.00","aggregation":"1Hr","stationName":"Station 1","analyzer":"AAQ","parameterStatus":"Active"},{"parameterName":"CEMS2_DRI PKCS 5-7","parameterCode":"PM","unit":"mg/Nm3","limit":"0-100","range":"0-1000","recordedTime":"2020-10-11 23:12:00.0","recordedLevel":"6.73","thresholdLevel":"0.00","aggregation":"1Hr","stationName":"Station 2","analyzer":"Stack","parameterStatus":"Active"},{"parameterName":"CEMS3_DRI NTFD 6-8","parameterCode":"PH","unit":"mg/Nm3","limit":"0-100","range":"0-1000","recordedTime":"2020-08-26 11:24:00.0","recordedLevel":"7.09","thresholdLevel":"0.00","aggregation":"1Hr","stationName":"Station 3","analyzer":"Water","parameterStatus":"Active"}
   ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(private router: Router,private userService:UserService) { }

  ngOnInit(): void {

   // this.data=this.parameter;

    const home = this.userService.homepage('a').subscribe(data=>{
		
		 // alert(data.regstatus);
			if(data.apiStatus.message === 'success') 
			{
     //  this.sortedData=JSON.stringify(data.data.realParameterInfo);
       //this.parameter=this.sortedData;
       //alert(this.parameter);

       this.sortedData=data.data;
       this.parameter=data.data.realParameterInfo;
       this.data=this.parameter;
      // this.data=this.data.stationName;
      // alert(this.parameter);
      }
    });
    
    
    
  }

  applyFilter(Value: string) {

  
    
    this.sortedData = this.parameter.filter(
      (val)=> val['parameterName'].includes(Value))
    //Searched Data
    console.log(this.sortedData);
    this.parameter=this.sortedData;
    if(Value=='')
    {
      
      this.parameter = this.data;
    }
    // this.sortedData=this.parameter.filter(
    //   (val)=>val['parameterCode'].includes(Value))
    //   console.log(this.sortedData);
    //   this.parameter=this.sortedData;
    //   if(Value=='')
    //   {
    //     this.parameter=this.data;
    //   }
      // this.sortedData=this.parameter.filter(
      //   (val)=>val['parameterName'].includes(Value),(val)=>val['parameterCode'].includes(Value))
      //   console.log(this.sortedData);
      //   this.parameter=this.sortedData;
      //   if(Value=='')
      //   {
      //     this.parameter=this.data;
      //   }


    }
    

  adm_emp_excel()
  {
    

    //this.router.navigate(['/Admin_emp_excel'])
  }
  logout()
  {
    this.router.navigate(['/login']);
  }
  

  

  

  
  
}
