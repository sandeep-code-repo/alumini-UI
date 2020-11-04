import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, RouterLink } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

import { routerTransition } from '../services/config/config.service';

import { UserService } from '../services/user/user.service';
import { PlantInfoData } from 'src/app/plant-info-data';

import { HttpClient } from '@angular/common/http';

import { CustomValidators } from 'src/app/custom-validators';
import { Industry, ParameterInfo, StationInfo, StationInfoMapper, UserInfo,Role } from '../model/industry.model';

import * as $ from "jquery";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})


export class RegistrationComponent implements OnInit {

  industry: Industry;
  add_industry: FormGroup;
  processForm: FormGroup;
  plant: PlantInfoData;
  stationInfo: StationInfo;
  submitted: Boolean = false;
 stationinfomap: StationInfoMapper[]=[]
  userInfo: UserInfo;
  message: any;
  addProcesssubmitted: boolean;
role:Role;
userRole:Role[]=[]
  types$: { Category: string; }[];
stackDisplay:Boolean=false
  constructor(private route: Router, private userService: UserService, private formBuilder: FormBuilder, private HttpClient: HttpClient) {
this.role={roleId:0}
  }



  ngOnInit(): void {

    this.processForm = this.formBuilder.group({
      stationInfo:this.formBuilder.group({
      analyzerv2: ['', [Validators.required]],
      stationId: ['', [Validators.required]],
      location: ['', [Validators.required]],
      stationVendor: ['', [Validators.required]],
     
      longitute: ['', [Validators.required]],
      latitude: ['', [Validators.required]],
      measurementPrinciple: ['', [Validators.required]],
      stackHeight: ['', [Validators.required]],
      stackDiameter: ['', [Validators.required]],
      stackVelocity: ['', [Validators.required]],
      gasDischargeRate: ['', [Validators.required]],
      remarks: ['', [Validators.required]],

    }),
    parameterInfo: this.formBuilder.array([this.createParameterInfo()],[Validators.required]),
  })
    // this.parameterInfo.push(this.addParameter());
    // this.parameterinfo.push(this.createParameterInfo().value)
    
    this.stationinfomap.push(this.processForm.value)
    
    this.add_industry = this.formBuilder.group({
      plantInfo:this.formBuilder.group({
        plantVendor:[''],
        plantUserName: ['', [Validators.required]],
        category: ['', [Validators.required]],
        plantName: ['', [Validators.required]],
        plantType:[],
        roUser: ['', [Validators.required]],
        caaqmsStation: ['', [Validators.required]],
        cemsStation: ['', [Validators.required]],
        ceqmsStation: ['', [Validators.required]],
        
        
      }),
     
     // role: ['',],
    userInfoMapper:this.formBuilder.group({
   userInfo:this.formBuilder.group({
    userName: ["", [Validators.required]],
    password:['',[Validators.required]],
    roleId:[''],
    pin: ['', [Validators.required, Validators.minLength(7), CustomValidators.patternValidator(/\d/, { hasNumber: true })]],
    typ:[''],
    district: ['', [Validators.required]],
    town: ['', [Validators.required]],
    street: ['', [Validators.required]],
    state: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    authPerson: ['', [Validators.required]],
    mobNo: ['', [Validators.required, Validators.minLength(10), CustomValidators.patternValidator(/\d/, { hasNumber: true })]],
    authPersonDesig: ['', [Validators.required]],
    secdPerson: ['', [Validators.required]],
    secdPersonDesig: ['', [Validators.required]],
    secdPersonMob: ['', [Validators.required, Validators.minLength(10), CustomValidators.patternValidator(/\d/, { hasNumber: true })]],
    secdEmail: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
   }),


    })
  });


  }
  // get stationInfo() {
  //   return this.processForm.get('stationInfo') as FormGroup;
  // }
  get parameterInfo() {
    return this.processForm.get('parameterInfo') as FormArray;
  }

  addParameter() {
    this.parameterInfo.push(this.createParameterInfo());
  }
  removeParameter(index) {
    this.parameterInfo.removeAt(index);
  }

  createParameterInfo(): FormGroup {
    return this.formBuilder.group({
      'paramter': new FormControl('', Validators.required),
      'analyserMake': new FormControl('', Validators.required),
      'analyserModel': new FormControl('', Validators.required),
      'analyserSerialNo': new FormControl('', Validators.required),
      'devidceIMEINo': new FormControl('', Validators.required),
      'macId': new FormControl('', Validators.required),
      'measurmentMin': new FormControl('', Validators.required),
      'measurmentMax': new FormControl('', Validators.required),
      'unit': new FormControl('', Validators.required),
      'certification': new FormControl('', Validators.required),
    })

  }
  

  editProcess(editProcessObj) {
   
    this.processForm.patchValue({
     
      stationInfo:editProcessObj.stationInfo,
      parameterInfo: editProcessObj.parameterInfo,
     
     
    })
  }


  goback() {
    this.route.navigateByUrl("/regdetails");
  }
  get f() { return this.add_industry.controls; }

  get processf() { return this.processForm.controls }
 
  addProcess() {
 
// console.log(this.processForm.get('parameterInfo'))
    
//     this.addProcesssubmitted=true;
//     if (this.processForm.invalid) {

//          return;
//        }
// if(this.processForm.get('stationInfo.analyzerv2').value=='Emission'){this.stackDisplay=true;}
// else
// this.stackDisplay=false;
    let index = this.stationinfomap.findIndex(item => {
      return item.stationInfo.stationId == this.processForm.get('stationInfo.stationId').value;
    });


    if (this.stationinfomap.length == 1 && this.stationinfomap[0].stationInfo.stationId === "") {

      this.stationinfomap = [];
      this.stationinfomap.push(this.processForm.value);
    }
    else if (index > -1) {

      this.stationinfomap.splice(index, 1, this.processForm.value)
      
    } else {
      this.stationinfomap.push(this.processForm.value);
    }
    this.processForm.reset();
  }
  register() {
   // this.submitted=true;
   
    // if (this.add_industry.invalid) {

    //   return;
    // }


    this.industry = this.add_industry.value
    if(this.add_industry.get('userInfoMapper.userInfo').status=='INVALID')
    this.industry.regstatus = "register"
    else 
    this.industry.regstatus = "register"
    this.industry.stationInfoMapper = this.stationinfomap;
    this.role.roleId=this.add_industry.get('userInfoMapper.userInfo.roleId').value
    this.userRole.push(this.role)
    Object.assign(this.industry.userInfoMapper, { userRole: this.userRole })
    
    console.log(this.industry);
    
    const register = this.userService.registrationService(this.industry).subscribe(data => {



      if (data.apiStatus.message === 'success') {
        this.message = "Registration Successfull"
        console.log(data.apiStatus.message);
        // this.route.navigate(['/home']);

      } else {
        this.message = "Registration Failed"
        console.log(data);
      }

    });
  }
  stack(str:string)
  {
    
   
    if(str=="Ambient")
    {
      //this.stackDisplay=false;
      
      $('#stack_123').css('display','none');
      this.types$=[{"Category":"PM10"},{"Category":"PM2.5"},
      {"Category":"SOx"},
      {"Category":"NOx"},{"Category":"NO"},{"Category":"NO2"},{"Category":"CO"},{"Category":"CO2"},{"Category":"Others"
      }];
    }
   else
    if(str=="Emission")
    {
    // this.stackDisplay=true;
      this.addProcesssubmitted=true;
      // $('.stackDisplay').css('display','block');
      $('#stack_123').css('display','block');

      this.types$=[{"Category":"PM"},{"Category":"SO2"},
      {"Category":"NOx"},
      {"Category":"NO"},{"Category":"NO2"},{"Category":"SOx"},{"Category":"HF"},{"Category":"Others"
      }];
    }
else
    if(str=="Effluent")
    {
      
      //this.stackDisplay=false;
      $('#stack_123').css('display','none');
      this.types$=[{"Category":"BOD"},{"Category":"COD"},
      {"Category":"TSS"},
      {"Category":"PH"},{"Category":"Flow"},{"Category":"Fluoride"},{"Category":"Cr6+"},{"Category":"NH3"},{"Category":"Others"
      }];
    }



    
  }
  
}
