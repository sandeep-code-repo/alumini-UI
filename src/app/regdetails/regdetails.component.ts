import {AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user/user.service';
import {MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { IndustryDropDown } from '../services/common/dropdown.service';
import { LocalServiceService } from '../services/common/local-service.service';
import { Industry, UserInfo } from '../model/industry.model';
export interface IndustryDetails {
  id:number,
  name: string;
  address: string;
  category: string;
  regionalOfc: string;
  userId: string

}
@Component({
  selector: 'app-regdetails',
  templateUrl: './regdetails.component.html',
  styleUrls: ['./regdetails.component.css']
})

export class RegdetailsComponent implements OnInit,AfterViewInit {
  //regdetails: FormGroup;
 
  dataSource: MatTableDataSource<IndustryDetails>;
  industryCategory:any[];
  userName:string
  displayedColumns: string[] 
  isLoading:Boolean
  isLogin:Boolean;
   //baseUrl:string ="https://cors-anywhere.herokuapp.com/http://117.211.75.160:8086/rest/api/industry/dropdownIndustryList";
   
    types$;
    @ViewChild(MatSort, {static: false}) sort: MatSort;
     
    @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
    ngAfterViewInit() {
     // this.dataSource.paginator = this.paginator;
      
    }
    
	constructor(private router: Router, private storageService:LocalServiceService,private http:HttpClient,private industryDropDownService:IndustryDropDown) {
  //this.userName=""
}



  ngOnInit(){
    this. industryDropDownService.getIndustryCategory().subscribe(res =>
       {
       
      this.industryCategory= res.data;
    }
    
   );
   if(localStorage.isLogin){
   this.isLogin= this.storageService.getJsonValue('isLogin')
  
  // console.log(this.userInfo);
  }
  
  //  if(this.industryData!=null) 
  //  this.isLogin=true;
  
  }
   

filterForIndustry(filterVal: any) {
  this.isLoading = true
  this.dataSource = new MatTableDataSource();
  this. industryDropDownService.getIndustryByCategory(filterVal).subscribe(res => {
    this.isLoading = false;
    this.dataSource.data= res.data;
    if(this.dataSource.data.length>0) 
   { this.displayedColumns=  ['id','name','address','category','regionalOfc','status'];
    this.dataSource.sort = this.sort;
    this.dataSource.paginator=this.paginator;}
    else {
      this.displayedColumns=  [];
    //this.dataSource.sort = this.sort;
    //this.dataSource.paginator=this.paginator;
    }
  }, 
  error => this.isLoading = false
 ); 
 if(localStorage.isLogin)
 this.userName=this.storageService.getJsonValue('loggedInUserData').userInfoMapper.userInfo.userName;
 console.log(this.userName)
}



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  //  this.dataSource.filter = filterValue.trim().toLowerCase();
  //this.sortedData.filter = filterValue.trim().toLowerCase();
  }
  
  
  goback()
  {
    this.router.navigate(['/login']);
  }

  go()
  {
    this.router.navigate(['/registration'],{ queryParams: { status: 'UPDATE' }});
  }
  regpage(lbl)
  {
  
    if(lbl=="New Register")
    {
      this.router.navigate(['/registration']);
    }
    else
    {
      this.router.navigate(['/home']);
    }
   
  }

}


  
    
  

