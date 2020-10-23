
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { routerTransition } from '../services/config/config.service';
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
addhelp:FormGroup;
email:string="";
username:string="";
contact_no:string="";
query:string="";

submitted=false;
  constructor(private formBuilder: FormBuilder,private router:Router) { }
  clear(input: HTMLInputElement){
 
		input.value = ''; // null should work too, but as the type ov the value is string I like to use ''
	  }

    goback()
{
  this.router.navigate(['/login']);
  
}

  
  get f() { return this.addhelp.controls; }

  ngOnInit(): void {
    this.addhelp = this.formBuilder.group({     
		
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      contactno: ['', [Validators.required]],
      query: ['', [Validators.required]]

		});
  }
  SendEmail()
  {
    this.submitted = true;
    if (this.addhelp.invalid) {
    }
  else
  {
    alert("Please Check Your Email ..");
    this.router.navigate(['./']);
  }
}
  
}
