import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
@Component({
  selector: 'app-realtime-report',
  templateUrl: './realtime-report.component.html',
  styleUrls: ['./realtime-report.component.css']
})
export class RealtimeReportComponent implements OnInit {
cems:any;
ceqms:any;
aaqms:any;
totalms:any;

grewal:any;
  city:any;
  stateName:any;
  industryCategory:any;
  calendar:any;
  monitoringStation:any;
  parameterMoniter:any;
  
type:string;
emission:any=[];
effulent:any=[];
ambient:any=[];
  constructor(private UserService:UserService) { }

  ngOnInit(): void {
    const home = this.UserService.realtimereport().subscribe(data=>{
			debugger;
		//alert(JSON.stringify(data.data));
			if(data.apiStatus.message === 'success') 
			{
       // alert(JSON.stringify(data.data));
       console.log(data.data);
       this.cems=data.data.plantInfo.cemsStation;
       this.aaqms=data.data.plantInfo.caaqmsStation;
       this.ceqms=data.data.plantInfo.ceqmsStation;
       this.totalms=Number(this.cems)+Number(this.aaqms)+Number(this.ceqms)

      }
      else
      {
        alert('ERROR ON PAGE'+data.apiStatus.message);
      }
    });
  }
  monitoring_type(id)
  {
    this.type=id;

    const home = this.UserService.realtimereport_monitoring_type(id).subscribe(data=>{
			debugger;
		//alert(JSON.stringify(data.data));
			if(data.apiStatus.message === 'success') 
			{
        this.emission=data.data;
       // alert(JSON.stringify(data.data));
      }
    });
  }
}
