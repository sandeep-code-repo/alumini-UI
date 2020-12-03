import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { PolutionStationInfo, ListData } from '../model/industry.model';
import { LocalServiceService } from '../services/common/local-service.service';

@Component({
  selector: 'app-realtime-report',
  templateUrl: './realtime-report.component.html',
  styleUrls: ['./realtime-report.component.css']
})
export class RealtimeReportComponent implements OnInit {
  cems: any;
  ceqms: any;
  aaqms: any;
  totalms: any;

  grewal: any;
  city: any;
  stateName: any;
  industryCategory: any;
  calendar: any;
  monitoringStation: any;
  parameterMoniter: any;

  type: string;
  emission: any = [];
  effulent: any = [];
  ambient: any = [];

  public polutionStationInfo: PolutionStationInfo;
  public listData: ListData[];
  public selectedTab: string;
  public userData: any;

  constructor(private UserService: UserService, private localService: LocalServiceService) {
    this.userData = this.localService.getJsonValue('loggedInUserData');

    console.log(this.userData);

    let param = {
      plantId: this.userData.userName
    }
    this.UserService.getRealPollutantStationInfos(param).subscribe(res => {
      console.log(res);

      if (res.apiStatus.message === 'success') {
        this.polutionStationInfo = res.data;
        this.listData = this.polutionStationInfo.realTimeStationParamMapper.emissionList;
        this.selectedTab = 'emission';
      }
    });
  }

  ngOnInit(): void {
    this.UserService.realtimereport().subscribe(data => {

      if (data.apiStatus.message === 'success') {
        // alert(JSON.stringify(data.data));
        this.cems = data.data.plantInfo.cemsStation;
        this.aaqms = data.data.plantInfo.caaqmsStation;
        this.ceqms = data.data.plantInfo.ceqmsStation;
        this.totalms = Number(this.cems) + Number(this.aaqms) + Number(this.ceqms)

      }
      else {
        alert('ERROR ON PAGE' + data.apiStatus.message);
      }
    });
  }
  monitoring_type(id) {
    this.type = id;

    const home = this.UserService.realtimereport_monitoring_type(id).subscribe(data => {
      //alert(JSON.stringify(data.data));
      if (data.apiStatus.message === 'success') {
        this.emission = data.data;
        // alert(JSON.stringify(data.data));
      }
    });
  }


  getPollutionData(dataType: string) {
    this.selectedTab = dataType;
    if (dataType === 'emission') {
      this.listData = this.polutionStationInfo.realTimeStationParamMapper.emissionList;
    }

    if (dataType === 'effluent') {
      this.listData = this.polutionStationInfo.realTimeStationParamMapper.effluentList;
    }

    if (dataType === 'ambient') {
      this.listData = this.polutionStationInfo.realTimeStationParamMapper.ambientList;

    }

  }

}
