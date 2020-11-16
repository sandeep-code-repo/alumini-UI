import {AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule, Routes, Router,ActivatedRoute } from '@angular/router';
import { ValidationService } from '../services/config/config.service';
import { UserService } from '../services/user/user.service';
import {Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';

import { routerTransition } from '../services/config/config.service';
import { HttpClientJsonpModule } from '@angular/common/http';
import { AlertService } from '../alert.service';
import { stringify } from '@angular/compiler/src/util';
import { data } from 'jquery';
import { DataSource } from '@angular/cdk/table';





interface get_plant_type {
 
  plant_type: string;
}
 



@Component({
  selector: 'app-regdetails',
  templateUrl: './regdetails.component.html',
  styleUrls: ['./regdetails.component.css']
})
export class RegdetailsComponent implements AfterViewInit {
 register:string="New Register";
  sortedData:any=[];
  check_status:string="";
  username:string="";
  message:string="";
  studentDetail: any=[];
  regdetails: FormGroup;
  div1:boolean=false;
  style:string="hidden";
  tab:boolean=false;
count:string="2";
  visibility:string="visibility";
  name:string="select";
  dataSource:any=[];
  

  displayedColumns: string[] = ['id', 'name','address','category','regionalOfc','status'];
  

   get_industry: get_plant_type[];
   cacheForecasts: get_plant_type[];
   summaries:any=[
     {
    // "category":"power plant"
     
   }];
 
   baseUrl:string ="https://cors-anywhere.herokuapp.com/http://117.211.75.160:8086/rest/api/industry";


  

  
  

  no = 0;
  ngAfterViewInit() {
   // this.dataSource.sort = this.sort;
    }
  
    types$;


    
	constructor(private formBuilder: FormBuilder, private activaterouter:ActivatedRoute,private router: Router, private userService: UserService,private http:HttpClient) {
  
    this.sortedData = this.dataSource.slice();
    this.regdetails = this.formBuilder.group({
			email: ['', [Validators.required, ValidationService.emailValidator]],
			password: ['', [Validators.required, ValidationService.passwordValidator]]
    });
    
    

    http.get<any>(this.baseUrl).subscribe(result => {
      this.get_industry = result;
      this.cacheForecasts = result;
  }, error => console.error(error));

    
  http.get<any>(this.baseUrl).subscribe(data => {
    this.types$ = data.data;
    
   // this.types$=JSON.parse(this.types$);
    
   // alert(JSON.stringify(this.types$))
  }, error => console.error(error));
}
compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

sortData(sort: Sort) {
 
  const data = this.dataSource.data.slice();
  if (!sort.active || sort.direction === '') {
    
    this.sortedData = data;
    return;
  }
  

  this.sortedData = data.sort((a, b) => {
    const isAsc = sort.direction === 'asc';
   // alert(isAsc);
    switch (sort.active) {
      case 'id': return this.compare(a.id, b.id, isAsc);
      case 'name': return this.compare(a.name, b.name, isAsc);
      case 'address': return this.compare(a.address, b.address, isAsc);
      case 'category': return this.compare(a.category, b.category, isAsc);
      case 'regionalOfc': return this.compare(a.regionalOfc, b.regionalOfc, isAsc);
      case 'status': return this.compare(a.status, b.status, isAsc);
      default: return 0;
    }
  });

}
 

filterForeIndustry(filterVal: any) {
    if (filterVal == "0")
        this.get_industry = this.cacheForecasts;
    else
     //alert('bind')
       // this.get_industry = this.cacheForecasts.filter((item) => item.plant_type == filterVal);
       this.get_industry.filter = filterVal.trim().toLowerCase();
       this.name=filterVal.trim().toLowerCase();
}



  ngOnInit(){
   console.log (localStorage.getItem('currentUser')) 
  
    if(this.name=="select"|| this.name=="")
    {
      $('.test1').css('display','none');

      this.dataSource=null;
      this.sortedData=null;
    }

    this.activaterouter.queryParams.subscribe(params => {
      this.check_status = params['status'];
       this.username = params['username'];
    });
  
if(this.check_status =="active")
{
  this.register="Dashboard Report";
}

  }
  
  applyFilter(filterValue: string) {
  //  this.dataSource.filter = filterValue.trim().toLowerCase();
  this.sortedData.filter = filterValue.trim().toLowerCase();
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

  

  displaydata() {	

    if(this.name=="select")
    {
      
      $(".test1").css("display","none");

      return;
    }

    else
    if(this.name !="select")
    {

    this.dataSource=null;
    this.sortedData=null;
     
		//alert(this.name);
		const regdata = this.userService.display(this.name).subscribe(data=>{
		
      $(".modal").css("display","block");  

      console.log(JSON.stringify(data));
      
     

			if(data.apiStatus.message ==="success") {

      // alert(JSON.stringify(data));
        console.log(data.apiStatus.message);

      this.style="visibility";
      $(".modal").css("display","none");  
    
       $(".test1").css("display","block");
        this.dataSource=data;
        this.dataSource=new MatTableDataSource(data.data);
       this.sortedData=this.dataSource;
      // alert(JSON.stringify(data));
        this.count=this.dataSource.data.length;
       


if(this.check_status !="active")
{
  this.displayedColumns= ['id', 'name','address','category','regionalOfc'];
}

       
        // alert(JSON.stringify(data));

     //  $(".modal").css("display","none"); 
        }
        else {
 $(".test1").css("visibility","hidden");
       
		
			  }
			  
      }); 
      
      
    }
    }
}


  
    
  

