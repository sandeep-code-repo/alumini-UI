import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

import { routerTransition } from '../services/config/config.service';

import { PlantInfoData } from 'src/app/plant-info-data';



import { Industry, StationInfo, StationInfoMapper, UserInfo, Role } from '../model/industry.model';
import * as $ from "jquery";
import * as uuid from 'uuid';
import { UserService } from '../services/user/user.service';
import { removeData } from 'jquery';
import { LocalServiceService } from '../services/common/local-service.service';
import { IndustryService } from '../services/user/industry.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})


export class RegistrationComponent implements OnInit {
  @ViewChild('closeModal') private closeModal: ElementRef;


  industry: Industry;
  add_industry: FormGroup;
  processForm: FormGroup;
  plant: PlantInfoData;
  //stationInfo: StationInfo;
  submitted: Boolean = false;
  stationinfomap: StationInfoMapper[] = []
  userInfo: UserInfo;
  message: any;
  addProcesssubmitted: boolean;
  mode:boolean=true;

  role: Role;
  userRole: Role[] = []
  types$: { Category: string; }[];
  stackDisplay: Boolean = false
  constructor(private route: Router,private storageService:LocalServiceService,private industryService:IndustryService, private formBuilder: FormBuilder,private userService: UserService) {
    this.role = { roleId: 0 }
  }



  ngOnInit(): void {
    
    if(localStorage.isLogin){
      //this.isLogin= this.storageService.getJsonValue('isLogin')
      const userName=this.storageService.getJsonValue('loggedInUserData').userName;
      this.industryService.getIndustryData(userName).subscribe(res =>{
       
        if(res.apiStatus.message === 'success') 
        {
          this.industry=res.data;
         
          this.processForm = this.formBuilder.group({
            
            stationInfo: this.formBuilder.group({
              stnType: ['', [Validators.required]],
              stationId: ['',[Validators.required]],
              processAttached: ['', [Validators.required]],
              stationVendor: ['', [Validators.required]],
              longitute: ['', [Validators.required, Validators.pattern(/^(\d*\.)?\d+$/)]],
              latitude: ['', [Validators.required, Validators.pattern(/^(\d*\.)?\d+$/)]],
              measurementPrinciple: [''],
              stackHeight: [''],
              stackDiameter: [''],
              stackVelocity: [''],
              gasDischargeRate: [''],
              remarks: [''],
              //uuid: [uuid.v4()],
      
            }),
            parameterInfo: this.formBuilder.array([this.createParameterInfo()]),
          })
          // this.stationinfomap.push(this.industry.)
          this.stationinfomap=this.industry.stationInfoMapper

      this.add_industry = this.formBuilder.group({
      plantInfo: this.formBuilder.group({
        plantVendor: [this.industry.plantInfo.plantVendor, [Validators.required]],
        //plantUserName: [this.industry.plantInfo.plantName, [Validators.required]],
        category: [this.industry.plantInfo.category],
        plantName: [this.industry.plantInfo.plantName, [Validators.required]],
        //plantType: [],
        zonal: [this.industry.plantInfo.zonal, [Validators.required]],
        caaqmsStation: [this.industry.plantInfo.caaqmsStation, [Validators.pattern(/^[0-9]\d*$/)]],
        cemsStation: [this.industry.plantInfo.cemsStation, [Validators.pattern(/^[0-9]\d*$/)]],
        ceqmsStation: [this.industry.plantInfo.ceqmsStation, [Validators.pattern(/^[0-9]\d*$/)]],


      }),

      // role: ['',],
      userInfoMapper: this.formBuilder.group({
        userInfo: this.formBuilder.group({
          userName: [{value: this.industry.userInfoMapper.userInfo.userName, disabled: true}, [Validators.required]],
          password: [this.industry.userInfoMapper.userInfo.password, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&].{8,}')]],
          roleId: [this.industry.userInfoMapper.userRole[0].roleId],
          pin: [this.industry.userInfoMapper.userInfo.pin, [Validators.required, Validators.pattern("[0-9]{6}")]],
          //typ: [this.industry.userInfoMapper.userInfo.typ],
          district: [this.industry.userInfoMapper.userInfo.district, [Validators.required]],
          town: [this.industry.userInfoMapper.userInfo.town, [Validators.required]],
          street: [this.industry.userInfoMapper.userInfo.street, [Validators.required]],
          state: [this.industry.userInfoMapper.userInfo.state, [Validators.required]],
          email: [this.industry.userInfoMapper.userInfo.email, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
          authPerson: [this.industry.userInfoMapper.userInfo.authPerson, [Validators.required]],
          //selectmobNo: ['', Validators.required],
          mobNo: [this.industry.userInfoMapper.userInfo.mobNo, [Validators.required, Validators.pattern("[0-9]{10}")]],
          designation: [this.industry.userInfoMapper.userInfo.designation, [Validators.required]],
          secdPerson: [this.industry.userInfoMapper.userInfo.secdPerson, [Validators.required]],
          secdPersonDesig: [this.industry.userInfoMapper.userInfo.secdPersonDesig, [Validators.required]],
          //selectsecdPersonMob: ['', Validators.required],
          secdPersonMob: [this.industry.userInfoMapper.userInfo.secdPersonMob, [Validators.pattern("[0-9]{10}")]],
          secdEmail: [this.industry.userInfoMapper.userInfo.secdEmail, [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        }),


      })
    });
    this.mode=false;
        }
       });
     }
     
else{

    this.processForm = this.formBuilder.group({
      stationInfo: this.formBuilder.group({
        stnType: ['', [Validators.required]],
        stationId: ['', [Validators.required]],
        processAttached: ['', [Validators.required]],
        stationVendor: ['', [Validators.required]],
        longitute: ['', [Validators.required, Validators.pattern(/^(\d*\.)?\d+$/)]],
        latitude: ['', [Validators.required, Validators.pattern(/^(\d*\.)?\d+$/)]],
        measurementPrinciple: [''],
        stackHeight: [''],
        stackDiameter: [''],
        stackVelocity: [''],
        gasDischargeRate: [''],
        remarks: [''],
        //uuid: [uuid.v4()],

      }),
      parameterInfo: this.formBuilder.array([this.createParameterInfo()]),
    })
    //this.parameterInfo.push(this.addParameter());
    //this.parameterinfo.push(this.createParameterInfo().value)

    //this.stationinfomap.push(this.processForm.value)
    
    this.stationinfomap.push(this.processForm.value)
    this.add_industry = this.formBuilder.group({
      plantInfo: this.formBuilder.group({
        plantVendor: ['', [Validators.required]],
        plantUserName: ['', [Validators.required]],
        category: [''],
        plantName: ['', [Validators.required]],
        //plantType: [],
        zonal: ['', [Validators.required]],
        caaqmsStation: ['', [Validators.pattern(/^[0-9]\d*$/)]],
        cemsStation: ['', [Validators.pattern(/^[0-9]\d*$/)]],
        ceqmsStation: ['', [Validators.pattern(/^[0-9]\d*$/)]],


      }),

      // role: ['',],
      userInfoMapper: this.formBuilder.group({
        userInfo: this.formBuilder.group({
          userName: ["", [Validators.required]],
          password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&].{8,}')]],
          roleId: [''],
          pin: ['', [Validators.required, Validators.pattern("[0-9]{6}")]],
          typ: [''],
          district: ['', [Validators.required]],
          town: ['', [Validators.required]],
          street: ['', [Validators.required]],
          state: ['', [Validators.required]],
          email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
          authPerson: ['', [Validators.required]],
          //selectmobNo: ['', Validators.required],
          mobNo: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],
          designation: ['', [Validators.required]],
          secdPerson: ['', [Validators.required]],
          secdPersonDesig: ['', [Validators.required]],
          //selectsecdPersonMob: ['', Validators.required],
          secdPersonMob: ['', [Validators.pattern("[0-9]{10}")]],
          secdEmail: ['', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        }),


      })
    });
    this.mode=true;
  }

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
      'devidceIMEINo': new FormControl(''),
      'macId': new FormControl(''),
      'measurmentMin': new FormControl('', Validators.required),
      'measurmentMax': new FormControl('', Validators.required),
      'unit': new FormControl('', Validators.required),
      'certification': new FormControl('', Validators.required),
    })

  }


  editProcess(editProcessObj) {

    this.processForm.patchValue({

      stationInfo: editProcessObj.stationInfo,
      parameterInfo: editProcessObj.parameterInfo,


    })
  }


  goback() {
    this.route.navigateByUrl("/regdetails");
  }
  get f() { return this.add_industry.controls; }
  get plantInfof() { return (this.add_industry.get('plantInfo') as FormGroup).controls }
  get userInfof() { return (this.add_industry.get('userInfoMapper.userInfo') as FormGroup).controls }
  get processf() { return this.processForm.controls }
  get stationinfoV() { return (this.processForm.get('stationInfo') as FormGroup).controls }
  // get parameterinfoV(){return (this.processForm.get('i') as FormGroup).control}
get stationInfo() {
     return this.processForm.get('stationInfo') as FormGroup;
   }
   hideModal() {
    this.processForm.reset()
    //console.log(this.stationinfoV)
    this.addProcesssubmitted = false;
   //this.closeModal.nativeElement.click();  
     
   }
  addProcess() {

    this.addProcesssubmitted = true;
     
    if (this.processForm.invalid) {

               return;
             }


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
   
  // this.processForm.reset();
   //this.addProcesssubmitted=false
  }
  removeStationInfo(index) {
    //console.log(index)
   
    if(index==0){
      this.stationinfomap=[]
      //this.processForm.reset()
      this.stationinfomap.push( this.processForm.value)
    }
    
    else
    this.stationinfomap.splice(index);
  }
  register() {

    this.submitted = true;
    //console.log(this.add_industry)
    // if (this.add_industry.invalid) {

    //   return;
    // }


    this.industry = this.add_industry.value
   
if 
(this.stationinfomap.length>0 && this.stationinfomap[0].stationInfo.stationId!='')
    this.industry.stationInfoMapper = this.stationinfomap;
    if (!this.industry.stationInfoMapper)
    this.industry.userInfoMapper.userInfo.regStatus = false
  else
    this.industry.userInfoMapper.userInfo.regStatus = true
    this.role.roleId = this.add_industry.get('userInfoMapper.userInfo.roleId').value
    this.userRole.push(this.role)
    Object.assign(this.industry.userInfoMapper, { userRole: this.userRole })
    this.industry.regstatus = 'Register'
    //console.log(this.industry)
     this.userService.registrationService(this.industry).subscribe(data => {

      if (data.apiStatus.message === 'success') {
        this.message = "Registration Successfull"
        this.add_industry.reset();
        this.processForm.reset();
        this.stationinfomap=[]
        this.stationinfomap.push(this.processForm.value);
        this.submitted=false;
      } else {
        this.message = "Registration Failed"
        
      }

    });
  }
  update(){
    this.submitted = true;
    
    // if (this.add_industry.invalid) {

    //   return;
    // }


    this.industry = this.add_industry.getRawValue()
    
if 
(this.stationinfomap.length>0 && this.stationinfomap[0].stationInfo.stationId!='')
    this.industry.stationInfoMapper = this.stationinfomap;
   
    if (!this.industry.stationInfoMapper)
    this.industry.userInfoMapper.userInfo.regStatus = false
  else
    this.industry.userInfoMapper.userInfo.regStatus = true
    this.role.roleId = this.add_industry.get('userInfoMapper.userInfo.roleId').value
    this.userRole.push(this.role)
    Object.assign(this.industry.userInfoMapper, { userRole: this.userRole })
    this.industry.regstatus = 'Register'
   
    this.userService.updatePlantService(this.industry).subscribe(data => {

      if (data.apiStatus.message === 'success') {
        this.message = "Update Successfull"
        this.add_industry.reset();
        this.processForm.reset();
        this.stationinfomap=[]
        this.stationinfomap.push(this.processForm.value);
        this.submitted=false;
      } else {
        this.message = "Update Failed"
        
      }

    });
    
  }
  stack(option: string) {


    if (option == "Ambient") {
      //this.stackDisplay=false;

      $('#stack_123').css('display', 'none');
      this.types$ = [{ "Category": "PM10" }, { "Category": "PM2.5" },
      { "Category": "SOx" },
      { "Category": "NOx" }, { "Category": "NO" }, { "Category": "NO2" }, { "Category": "CO" }, { "Category": "CO2" }, {
        "Category": "Others"
      }];
    }
    else
      if (option == "Emission") {
        // this.stackDisplay=true;
        
        // $('.stackDisplay').css('display','block');
        $('#stack_123').css('display', 'block');

        this.types$ = [{ "Category": "PM" }, { "Category": "SO2" },
        { "Category": "NOx" },
        { "Category": "NO" }, { "Category": "NO2" }, { "Category": "SOx" }, { "Category": "HF" }, {
          "Category": "Others"
        }];
      }
      else
        if (option == "Effluent") {

          //this.stackDisplay=false;
          $('#stack_123').css('display', 'none');
          this.types$ = [{ "Category": "BOD" }, { "Category": "COD" },
          { "Category": "TSS" },
          { "Category": "PH" }, { "Category": "Flow" }, { "Category": "Fluoride" }, { "Category": "Cr6+" }, { "Category": "NH3" }, {
            "Category": "Others"
          }];
        }

  }

}
