import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalServiceService } from '../services/common/local-service.service';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-plant-info',
  templateUrl: './plant-info.component.html',
  styleUrls: ['./plant-info.component.scss']
})
export class PlantInfoComponent implements OnInit {
  profilename: any;
  company: any;
  city: any;
  stateName: any;
  industryCategory: any;
  calendar: any = [];
  monitoringStation: any;
  parameterMoniter: any;
  powerplant: any;
  sortedData: any;
  constructor(private router: Router, private userService: UserService, private storageService: LocalServiceService) { }

  ngOnInit(): void {
    if (localStorage.isLogin) {
      //this.isLogin= this.storageService.getJsonValue('isLogin')
      this.profilename = this.storageService.getJsonValue('loggedInUserData').userName;
    }
    this.userService.homepage(this.profilename).subscribe(data => {
      debugger
      if (data.apiStatus.message === 'success') {
      
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

}
