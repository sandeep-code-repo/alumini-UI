import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import{CustomValidators} from  'src/app/custom-validators';
import { Router,ActivatedRoute } from '@angular/router';

import { UserService } from '../services/user/user.service';
import {ReCaptcha2Component} from 'ngx-captcha';
import * as $ from 'jquery' ; 
import { Addpassword } from '../model/passwordInfo.model';
import { Location } from '@angular/common';
//declare var $: any;
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
export interface FormModel {
  captcha?: string;
}

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})




export class ForgetpasswordComponent implements OnInit {
  public formModel: FormModel = {};
  

  @ViewChild('captchaElem') captchaElem: ReCaptcha2Component;
  @ViewChild('recaptcha', {static: true }) recaptchaElement: ElementRef;
    $: any;
addpassword:FormGroup;
data=new Addpassword();
message:"Invalid";

status:boolean=true;

SITE_KEY="6LePbq4UAAAAAPqwJU8u5g1Of1TIEMyoPpJQpyaD";
password:string="";
email:string="";
cnf_password:String="";
btn_submit:boolean=false;

check_status:string="";

showDropDown:boolean;
displayddl:string="none";
displaydd2:string="none";
div_visible;
isDisable:string="disabled";

cleardata:FormGroup;
  submitted = false;
  jsonResponse: string="";

  flag=false;
  
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }
  ShowForm(){
    $(".texbsize1").css("box-shadow","5px 5px 6px 5px #888888");
   // $(".texbsize1").prop("readonly","true");
   
   
   
  }
  

goback()
{
  this.addpassword.reset();
  this.router.navigate(['/login']);
  
}

visible()
{
  
   // this.displaydd2="block";
    
}
onSubmit()
{
  
  

  this.submitted = true;
  if (this.addpassword.invalid) {

   
  }
else
{
  
  
  if(this.addpassword.get('Email').value !=="")
  {
   var n=confirm("Invalid Email Please Register")
   {
     
     if(n==true)
     {
      this.router.navigate(['/registration'])
     }
     else
     {
      this.router.navigate(['/forgerpassword'])

      

     }
     
   }
   
  }
  else

  {
   
  alert("Please Check Your Email ..");
  this.router.navigate(['./']);
  }

  

  

}
  
   
}
  constructor(private formBuilder: FormBuilder,private router:Router,private activaterouter:ActivatedRoute,private user:UserService,private location:Location) { 

    
  
  }

  
  clear(input: HTMLInputElement){
 
		input.value = ''; // null should work too, but as the type ov the value is string I like to use ''
	  }

  get f() { return this.addpassword.controls; }
  
  

  renderReCaptcha() {
    window['grecaptcha'].render(this.recaptchaElement.nativeElement, {
      'sitekey' : '6LePbq4UAAAAAPqwJU8u5g1Of1TIEMyoPpJQpyaD',
      'callback': (response) => {
          console.log(response);
      }
    });
  }

  save()
  {
    this.submitted=true; 

  

    if(this.addpassword.get('email').value && this.addpassword.get('cnf_password').value && this.addpassword.get('password').value !== "")
    
       {   
      $(".modal").css("display","block");  

    if(this.addpassword.get('password').value !== this.addpassword.get('cnf_password').value )
      {
        $(".modal").css("display","none");  
        $(".modal_invalid").css("display","block"); 
        this.jsonResponse="Password Mismatch";

return false;

      }
   

      if(this.addpassword.invalid)
      {
        $(".modal").css("display","none");  
      // alert('invalid');
      }
     else
     {
     // alert('check');
     
        $(".modal").css("display","block");

    const forget_api = this.user.Forget(this.addpassword.value).subscribe(data=>{
      debugger;   
    
      if(data.apiStatus.message === 'error') {

        this.data.message="Invalid Email Found";
        $(".modal").css("display","none");  
        this.jsonResponse="Invalid Email";
        $(".modal_invalid").css("display","block"); 

       

      }
      else
      {
        $(".modal").css("display","none");  
        $(".modal_save").css("display","block");  
       // this.router.navigate["/forgetpassword"];
        
      }
    });
  }
  }
    
  
      
  
  }
  

  addRecaptchaScript() {
    this.div_visible="block";
  

   
    window['grecaptchaCallback'] = () => {
     
      
      window['grecaptcha'].render(this.recaptchaElement.nativeElement, {
        'sitekey' : '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
        'callback': (response) => {
            console.log(response);
         
            this.status=false;
           
             
             
              $("button").prop("disabled", false );
            
           
           
           
        }
      });
    }
 
    (function(d, s, id, obj){

      
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {  window['grecaptcha'].render(this.recaptchaElement.nativeElement, {
        'sitekey' : '6LePbq4UAAAAAPqwJU8u5g1Of1TIEMyoPpJQpyaD',
        'callback': (response) => {
            console.log(response);
          
        }
        
      }); return;}
      js = d.createElement(s); js.id = id;
      
      js.src = "https://www.google.com/recaptcha/api.js?onload=grecaptchaCallback&amp;render=explicit";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'recaptcha-jssdk', this));
 
   
  }

  

  ngOnInit() {

  
   
      
//if (window.grecaptcha) grecaptcha.reset();
$(document).ready(function(){

  grecaptcha.reset();
  
 
  
    
});


    $(".close").click(function(){
      $(".modal_save").css("display","none");
      $(".modal_invalid").css("display","none");
      
  
    });

    
    $(".close_modal").click(function(){
      $("input").empty();
      $(".modal_save").css("display","none");
      $(".modal_invalid").css("display","none");
      $(".modal").css("display","none");
     // location.reload(true);
     $('.input').val('');
        });   
  


    
    this.addRecaptchaScript();
    this.addpassword = this.formBuilder.group({     
		
      password: ['', [Validators.required,CustomValidators.patternValidator(/\d/, { hasNumber: true }),CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }), CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),Validators.minLength(8)]],
      email: ['', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      cnf_password: ['', [Validators.required]]
        
    });
    

    
    
  }

  
 
}
