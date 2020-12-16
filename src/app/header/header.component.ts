import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { LocalServiceService } from '../services/common/local-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  profilename: any;
  route: string;
  isDashboard: any;
  isRealtimeReport:any;
  isTrends:any;
  isExcedenceReport:any;

  constructor(private router: Router,private userService:UserService,private storageService:LocalServiceService) { }

  ngOnInit(): void {
    if(localStorage.isLogin){
      //this.isLogin= this.storageService.getJsonValue('isLogin')
      this.profilename=this.storageService.getJsonValue('loggedInUserData').userName;
     }
    //this.profilename=GlobalConstants.siteTitle;
  }
  logout() {
    window.location.href = '/login';
  }
}
