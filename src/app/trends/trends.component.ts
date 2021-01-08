import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import {GlobalConstants} from '../common/global';
import { IndustryService } from '../services/user/industry.service';
import { LocalServiceService } from '../services/common/local-service.service';
import { Industry, StationInfoMapper } from '../model/industry.model';
import { FilterChart } from '../model/filterchart.model';
import { DatePipe } from '@angular/common';
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
  paramList:[]

public filterOption: ChartFilterOption[];
public selectedOption: ChartFilterOption;
public options: any;
  public data: any;
  public dateFrom: Date;
  public dateTo: Date;
filterData:FilterChart;
filtersList:FilterChart[]=[]

view;
showTime:Boolean;
parameterOption: any[];
stationOption:any[]
  selectedfreq: any;
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

  
}
changeDatepicker(){
    
  const selected:any=this.selectedOption
  
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
addParam(){
  console.log(this.selectedStation)
  if(this.selectedStation=='ALL Stations')
  
  //this.stationList.filter(item => item === 'parameterInfo');
 this.stationList.forEach(element => {
    console.log(element.parameterInfo)
  });
  else
  this.paramList=this.selectedStation.parameterInfo
}
 
populateChart(){
   this.selectedfreq=this.selectedOption
   console.log(this.selectedStation)
   this.filtersList=[]
   if(this.selectedStation=='ALL Stations'){
    this.stationList.forEach(element => {
      console.log(element.parameterInfo)
      this.filterData=
    {frequency: this.selectedfreq,
    fromDate: this.datepipe.transform(this.dateFrom,'yyyy-MM-dd hh:mm:ss'),
    toDate: this.datepipe.transform(this.dateTo, 'yyyy-MM-dd hh:mm:ss'),
    plantId: "hindalco_lpng",
    stationId: element.stationInfo.stationId,
    parameter: "NO2"
    }
    this.filtersList.push(this.filterData)
    });
   }
  else{
  this.filterData=
    {frequency: this.selectedfreq,
    fromDate: this.datepipe.transform(this.dateFrom,'yyyy-MM-dd hh:mm:ss'),
    toDate: this.datepipe.transform(this.dateTo, 'yyyy-MM-dd hh:mm:ss'),
    plantId: "hindalco_lpng",
    stationId: this.selectedStation.stationInfo.stationId,
    parameter: "NO2"
    }
    this.filtersList.push(this.filterData)
    console.log(this.filtersList)
  }
}
  goback() {
    this.router.navigateByUrl("/regdetails");
  }
}
interface ChartFilterOption {
  name: string;
 // code: number;
}
