import { Component, OnInit, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-admin-emp-excel',
  templateUrl: './admin-emp-excel.component.html',
  styleUrls: ['./admin-emp-excel.component.scss']
})

export class AdminEmpExcelComponent implements OnInit {

  @Input() multiple: boolean = false;
    @ViewChild('fileInput') inputEl: ElementRef;
    uploadForm;
  filename:string="";
  message;
  exceltoJson = {};
  arrayBuffer:any;
file:File;
incomingfile(event) 
  {
  this.file= event.target.files[0]; 
  }

  constructor(private router:Router,private userService: UserService,private http:HttpClient,private formBuilder: FormBuilder) { }

  
  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });

    $(".close_modal").click(function(){
     
      $(".modal_invalid").css("display","none");
      
  
    });
    $(".close").click(function(){
     
      $(".modal_invalid").css("display","none");
      
  
    });
  }


  public upload(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
  }
  exportexcel(): void 
  {
    this.message="Please Wait...";
    $('.modal_invalid').css('display','block');

    const formData = new FormData();
    formData.append('file', this.uploadForm.get('profile').value);

    
    this.http.post<any>('https://cors-anywhere.herokuapp.com/http://117.211.75.160:8086/rest/api/saveExcelRegistration/', formData).subscribe(data=>{
            
             
             if(data.apiStatus.message =="success")
             {
              this.message="Data Upload Successfully";
              $('.modal_invalid').css('display','block');
               console.log(data);
             }
               
             else
             {
              this.message="Upload Failed!!! Invalid Data Found";
              $('.modal_invalid').css('display','block');
             }
             
           });

     /* save to file */
     

     
    
  }
  goback()
  {
    this.router.navigate(['/home']);
  }
}
