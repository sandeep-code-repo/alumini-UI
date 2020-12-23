
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { routerTransition } from '../services/config/config.service';
import { UserService } from '../services/user/user.service';
import{CustomValidators} from  'src/app/custom-validators';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})




export class HelpComponent implements OnInit {
addhelp:FormGroup;

email:string="";
username:string="";
contactno:string="";
query:string="";

jsonResponse:string="";
submitted=false;
  constructor(private formBuilder: FormBuilder,private router:Router,private user:UserService) { }
  clear(input: HTMLInputElement){
 
		input.value = ''; // null should work too, but as the type ov the value is string I like to use ''
	  }

    goback()
{
  this.router.navigate(['/login']);
  
}

  
  get f() { return this.addhelp.controls; }

  ngOnInit(): void {

    

    
    $(".close").click(function(){
      $(".modal_save").css("display","none");
      $(".modal_invalid").css("display","none");
  
    });

    $("#contactno").keypress(function (e) {
      if (String.fromCharCode(e.keyCode).match(/[^0-9]/g)) return false;
  });
 

  $("#username").keypress(function (e) {
    if (String.fromCharCode(e.keyCode).match(/[^a-zA-Z]/g)) return false;
});

    
    $(".close_modal").click(function(){
      $("input").empty();
      $(".modal_save").css("display","none");
      $(".modal_invalid").css("display","none");
      $(".modal").css("display","none");
     // location.reload(true);
     $('.input').val('');
        });   

    this.addhelp = this.formBuilder.group({     
		
      username: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      contactno: ['', [Validators.required]],
      query: ['', [Validators.required]]

		});
  }
  SendEmail()
  {
    

    this.submitted = true;
    if (this.addhelp.invalid) {
      this.jsonResponse="Invalid Data ";
     // $(".modal_invalid").css("display","block");
    }
  else
  {
     

    const forget_api = this.user.send_query(this.addhelp.value).subscribe(data=>{
      debugger;   
    
      if(data.apiStatus.message === 'error') {

      //  this.data.message="Invalid Email Found";
        //$(".modal").css("display","none");  
        this.jsonResponse="Invalid Email";
        $(".modal_invalid").css("display","block"); 

       

      }
      else
      {
        $(".modal_invalid").css("display","block"); 
        this.jsonResponse="Thank you !! Your Query has been sent . We will reach to you shortly.";
        //alert("Please Check Your Email ..");
        //this.router.navigate(['./']);
      }
    });


   
  }
}
  
}
