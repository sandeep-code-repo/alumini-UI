import {AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { ValidationService } from '../services/config/config.service';
import { UserService } from '../services/user/user.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';


import { routerTransition } from '../services/config/config.service';
import { HttpClientJsonpModule } from '@angular/common/http';

export interface PeriodicElement {
  id: string;
  name: string;
  address: string;
  category: string;
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
  studentDetail: any=[];
  regdetails: FormGroup;
  div1:boolean=false;
  tab:boolean=false;
  dataSource:any=[];

  displayedColumns: string[] = ['id', 'name','address','category','regionalOfc','status'];
  
 

  

  @ViewChild(MatSort) set matSort(sort: MatSort) {
    if (!this.dataSource.sort) {
        this.dataSource.sort = sort;
    }
  }


  no = 0;
  ngAfterViewInit() {
   // this.dataSource.sort = this.sort;
    }
  
  

	constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {
		this.regdetails = this.formBuilder.group({
			email: ['', [Validators.required, ValidationService.emailValidator]],
			password: ['', [Validators.required, ValidationService.passwordValidator]]
    });
    
  }

  ngOnInit(){
    const regdata = this.userService.display(this.regdetails.value).subscribe(data=>{
      debugger;
      this.dataSource=data;
     this.dataSource=new MatTableDataSource(data);
    });
   
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  goback()
  {
    this.router.navigate(['/regdetails']);
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

		
		const regdata = this.userService.display(this.regdetails.value).subscribe(data=>{
			debugger;
		
		
			if(data.status !== "") {
			this.div1=true;
			//	window.localStorage.setItem('token', data.result.token);
				this.router.navigate(['/regdetails']);
       // alert(status);
        this.studentDetail=data;
        
       // alert(this.studentDetail);
			  }else {
				//this.invalidLogin = true;
			//	alert('data is'+data);
			//	console.log(data);
			  }
			  
      }); 
      
      }
     

}


  
    
  

