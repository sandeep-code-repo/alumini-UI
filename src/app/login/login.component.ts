

import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { ValidationService } from '../services/config/config.service';
import { UserService } from '../services/user/user.service';
import {Login} from 'src/app/login';
import { routerTransition } from '../services/config/config.service';
import { Industry } from '../model/industry.model';
import { IndustryService } from '../services/user/industry.service';
import { LocalServiceService } from '../services/common/local-service.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	animations: [routerTransition()],
	host: { '[@routerTransition]': '' }
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	login=new Login();

	industrydata: Industry;
	username:string=null;
	password:string=null;

	cleardata:FormGroup;
	submitted = false;

	constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService,private industryService: IndustryService,private storageService:LocalServiceService) {
	
	}
	clear(input: HTMLInputElement){
 
		input.value = ''; // null should work too, but as the type ov the value is string I like to use ''
	  }

	get f() { return this.loginForm.controls; }

	// Check if user already logged in
	ngOnInit():void {
		
		$( document ).ready(function() {
			$('#password').val('');
			});	

		this.loginForm = this.formBuilder.group({     
			userName: ['', [Validators.required]],
			password: ['', [Validators.required]],
		});

		$(".close").click(function(){
			$(".modal_invalid").css("display","none");
			$(".modal").css("display","none");
			  });
		
			
// close button show
$(".close_modal").click(function(){
	$(".modal_invalid").css("display","none");
	$(".modal").css("display","none");
	  });

	}

	

	help()
	{		
		this.router.navigate(['/help']);
	}
	forgetpasswordpage()
	{
		this.router.navigate(['/forgetpassword'])
  .then(() => {
    location.reload();
  });
		
	//	this.router.navigate(['/forgetpassword'], { queryParams: { order: 'popular' }});
	}
	forgetpasswordpage123()
	{
		
		this.router.navigate(['/password']);
	}
	regipage()
	{
		this.router.navigate(['/registration']);
	}

	api()
	{
		
		this.router.navigate(['/apidoc']);
	}

	excel()
	{
		this.router.navigate(['/empexcel']);
	}


	// Initicate login
	homego() {
		//---loading image 
		
		$(".modal").css("display","none");
		
this.submitted = true;

//--for validation page

if (this.loginForm.valid) {
	
	$(".modal").css("display","block");
		const login = this.userService.login(this.loginForm.value).subscribe(data=>{
			if(data.apiStatus.message === 'success') 
			{	
					this.industrydata=data.data;
					this.storageService.setJsonValue("loggedInUserData",data.data.userInfoMapper.userInfo);
					this.storageService.setJsonValue("isLogin",true)
					this.industryService.addIndustryData(this.industrydata);
					//this.industrydata.userInfoMapper.userInfo.regStatus=true;
					if(this.industrydata.userInfoMapper.userInfo.regStatus==true)
					this.router.navigate(['/regdetails']);
				else
				this.router.navigate(['/registration']);
				// if(data.apiStatus.userRole === true) {
				// 	this.router.navigate(['/regdetails'],{ queryParams: { status: 'active',username:this.loginForm.get('username').value }});
				// }
				// else
				// {
				// 	this.router.navigate(['/registration'],{ queryParams: { status: 'Register',username:this.loginForm.get('username').value}});
				// }
			    // //	this.router.navigate(['/registration'],{ queryParams: { status: 'Register'}});
				// this.router.navigate(['/regdetails'],{ queryParams: { status: 'active',username:'umakanta' }});
				

				$(".modal").css("display","none");
			 //	window.localStorage.setItem('token', data.result.token);
			//	this.router.navigate(['/home']);
				
			  }
			  else {
				$(".modal").css("display","none");
				$(".modal_invalid").css("display","block");
				console.log(data);
			  }
			  
			});
		  }
		}
    
		}

	
		 
	





