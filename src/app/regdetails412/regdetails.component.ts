import {AfterViewInit, Component, ViewChild, OnInit,Pipe, PipeTransform } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { ValidationService } from '../services/config/config.service';
import { UserService } from '../services/user/user.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';

import { routerTransition } from '../services/config/config.service';
import { HttpClientJsonpModule } from '@angular/common/http';
import { AlertService } from '../alert.service';
import { stringify } from '@angular/compiler/src/util';
import { data } from 'jquery';



export interface PeriodicElement {
  id: string;
  name: string;
  address: string;
  category: string;
}

interface get_plant_type {
 
  plant_type: string;
}
 
interface Summary {
    name: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {id: '1', name: 'Hydrogen', address: 'bbsr', category: 'H'},
  {id: '2', name: 'Hydrogen1', address: 'bbsr1', category: 'H1'},
  {id: '3', name: 'Hydrogen2', address: 'bbsr2', category: 'H2'},
  {id: '4', name: 'Hydrogen3', address: 'bbsr3', category: 'H'},
  {id: '5', name: 'Hydrogen4', address: 'bbsr4', category: 'H'},
  
];

@Component({
  selector: 'app-regdetails',
  templateUrl: './regdetails.component.html',
  styleUrls: ['./regdetails.component.css']
})
export class RegdetailsComponent implements AfterViewInit {

  message:string="";
  studentDetail: any=[];
  regdetails: FormGroup;
  div1:boolean=false;
  style:string="hidden";
  tab:boolean=false;
count:string="2";
  visibility:string="visibility";
  name:string="";
  dataSource:any=[
    {
    //  "id":1,"name":"M/s. Bhubaneshwar Power Pvt. Ltd.","address":"At-Anantapur,Po- Dhurusia, Cuttack, Pin-754027","category":"power plant","regionalOfc":"Cuttack","status":"Status"},{"id":2,"name":"M/s. Bhusan Energy Ltd.","address":"At- Ganthigadia, PO- Nuahat, Via- Banarpal, Dist - Angul -759128","category":"power plant","regionalOfc":"angul","status":"Register"},{"id":3,"name":"M/s. FACOR Power Ltd.","address":"At- D.P. nagar, Po - Randia, Dist - Bhadrak - 765135","category":"power plant","regionalOfc":"Balasore","status":"Register"
    }
  ];

  displayedColumns: string[] = ['id', 'name','address','category','regionalOfc'];
  

   get_industry: get_plant_type[];
   cacheForecasts: get_plant_type[];
   summaries:any=[
     {
    // "category":"power plant"
     
   }];
 
   baseUrl:string ="https://cors-anywhere.herokuapp.com/http://117.211.75.160:8086/rest/api/industry";


  

  @ViewChild(MatSort) set matSort(sort: MatSort) {
    if (!this.dataSource.sort) {
        this.dataSource.sort = sort;
    }
  }
  

  no = 0;
  ngAfterViewInit() {
   // this.dataSource.sort = this.sort;
    }
  
    types$;

	constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService,private http:HttpClient) {
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
    
    this.types$=JSON.parse(this.types$);
    
   // alert(JSON.stringify(this.types$))
  }, error => console.error(error));
}
transform(elements: any[]) {
  let result = [];
  elements.forEach(element => {
   if (!elements.find(fEle => fEle.certification === element.certification)) {
     result.push(element);
   }
 });
return result;
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


    $(".test1").css("display","none");  


  

// databinding drop down-
const regdata = this.userService.display(this.regdetails.value).subscribe(data=>{
  debugger;
  this.dataSource=data;
 this.dataSource=new MatTableDataSource(data.data);
});

   

   
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  
  goback()
  {
    this.router.navigate(['/login']);
  }

  regpage(lbl)
  {
  
    if(lbl=="0")
    {
alert('Already Registerd Successfully');
    }
    else
    {
      this.router.navigate(['/registration']);
    }
   
  }

  

  displaydata() {	

    if(this.name=="select")
    {
      $(".test1").css("display","none");
      return false;
    }

     
		//alert(this.name);
		const regdata = this.userService.display(this.name).subscribe(data=>{
			debugger;
      $(".modal").css("display","block");  

      console.log(JSON.stringify(data));
      
     

			if(data.apiStatus.message ==="success") {

        console.log(data.apiStatus.message);

      this.style="visibility";
      $(".modal").css("display","none");  
    
       $(".test1").css("display","block");
        this.dataSource=data;
        this.dataSource=new MatTableDataSource(data.data);

        this.count=this.dataSource.data.length;
       // alert(JSON.stringify(data));

     //  $(".modal").css("display","none"); 
        }
        else {
 $(".test1").css("visibility","hidden");
       
		
			  }
			  
      }); 
      
      
     
    }
}


  
    
  

