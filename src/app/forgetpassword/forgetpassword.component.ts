import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import{CustomValidators} from  'src/app/custom-validators';
import { Router } from '@angular/router';
import { routerTransition } from '../services/config/config.service';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
addpassword:FormGroup;
Password:string="";
cleardata:FormGroup;
  submitted = false;
  
goback()
{
  this.router.navigate(['/login']);
  
}
SendEmail()
{
  this.submitted = true;
  if (this.addpassword.invalid) {
  }
else
{
  alert("Please Check Your Email ..");
  this.router.navigate(['./']);
}
  
 
}
  constructor(private formBuilder: FormBuilder,private router:Router) { }

  clear(input: HTMLInputElement){
 
		input.value = ''; // null should work too, but as the type ov the value is string I like to use ''
	  }

  get f() { return this.addpassword.controls; }
  

  ngOnInit(): void {
    this.addpassword = this.formBuilder.group({     
		
      Password: ['', [Validators.required,CustomValidators.patternValidator(/\d/, { hasNumber: true }),CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }), CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),Validators.minLength(8)]
      
    
            ],
		});
  }
 
}
