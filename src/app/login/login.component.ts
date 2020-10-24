/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */

import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { ValidationService } from '../services/config/config.service';
import { UserService } from '../services/user/user.service';
import {Login} from 'src/app/login';
import { routerTransition } from '../services/config/config.service';
import { stringify } from '@angular/compiler/src/util';
import { TooltipModule } from '@syncfusion/ej2-angular-popups';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	animations: [routerTransition()],
	host: { '[@routerTransition]': '' }
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	login=new Login();

	


	Username:string="";
	Password:string="";

	cleardata:FormGroup;
	submitted = false;

	constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {
	
	}
	clear(input: HTMLInputElement){
 
		input.value = ''; // null should work too, but as the type ov the value is string I like to use ''
	  }

	get f() { return this.loginForm.controls; }

	// Check if user already logged in
	ngOnInit():void {
		this.loginForm = this.formBuilder.group({     
			Username: ['', [Validators.required]],
			Password: ['', [Validators.required]],
		});
	}

	help()
	{		
		this.router.navigate(['/help']);
	}
	forgetpasswordpage()
	{
		this.router.navigate(['/forgetpassword']);
	}
	regipage()
	{
		this.router.navigate(['/regdetails']);
	}
	// Initicate login
	homego() {
this.submitted = true;
if (this.loginForm.invalid) {
		//alert(this.login.username+this.login.password);
		if(this.Username=="hindalco"&& this.Password=="hindalco@123")
		{
		//	this.router.navigate(['/home']);

		}
	   else
	   {
		   
		   alert('Wrong Username And Password');
		   return false;
	   }
		
		const login = this.userService.login(this.login).subscribe(data=>{
			
	
		//alert(data.apiStatus.message);
			if(data.apiStatus.message === 'success') {
			
			//	window.localStorage.setItem('token', data.result.token);
				this.router.navigate(['/home']);
				//alert(data.status);
			  }else {
				//this.invalidLogin = true;
				//alert('data is'+stringify(data.data));
				console.log(data);
			  }
			  
			});
		  }
		}
    
		}

	
		 
	




/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
