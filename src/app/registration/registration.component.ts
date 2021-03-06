import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, RouterLink } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormArray, FormControl, FormArrayName } from '@angular/forms';

import { routerTransition } from '../services/config/config.service';

import { UserService } from '../services/user/user.service';
import { PlantInfoData } from 'src/app/plant-info-data';

import { HttpClient } from '@angular/common/http';


import { Industry, ParameterInfo, StationInfo, StationInfoMapper, UserInfo, Role } from '../model/industry.model';

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
  stationinfomap: StationInfoMapper[] = []
  userInfo: UserInfo;
  message: any;
  addProcesssubmitted: boolean;

  role: Role;
  userRole: Role[] = []
  types$: { Category: string; }[];
  stackDisplay: Boolean = false
  constructor(private route: Router, private userService: UserService, private formBuilder: FormBuilder, private HttpClient: HttpClient) {
    this.role = { roleId: 0 }
  }



  ngOnInit(): void {

    this.processForm = this.formBuilder.group({
      stationInfo: this.formBuilder.group({
        stnType: ['', [Validators.required]],
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
      parameterInfo: this.formBuilder.array([this.createParameterInfo()], [Validators.required]),
    })
    //this.parameterInfo.push(this.addParameter());
    //this.parameterinfo.push(this.createParameterInfo().value)

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
          authPersonDesig: ['', [Validators.required]],
          secdPerson: ['', [Validators.required]],
          secdPersonDesig: ['', [Validators.required]],
          //selectsecdPersonMob: ['', Validators.required],
          secdPersonMob: ['', [Validators.pattern("[0-9]{10}")]],
          secdEmail: ['', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
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

  addProcess() {

    this.addProcesssubmitted = true;
    //console.log(this.processForm)
    // if (this.processForm.invalid) {

    //            return;
    //          }

    // if(this.processForm.get('stationInfo.stnType').value=='Emission'){this.stackDisplay=true;}
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
    //this.addProcesssubmitted = false;
    this.processForm.reset();
  }
  register() {

    this.submitted = true;
    //console.log(this.add_industry)
    // if (this.add_industry.invalid) {

    //   return;
    // }


    this.industry = this.add_industry.value

    this.industry.stationInfoMapper = this.stationinfomap;
    this.role.roleId = this.add_industry.get('userInfoMapper.userInfo.roleId').value
    this.userRole.push(this.role)
    Object.assign(this.industry.userInfoMapper, { userRole: this.userRole })

    //console.log(this.industry);
    this.industry.regstatus = 'Register'
    if (this.industry.stationInfoMapper.length < 0)
      this.industry.userInfoMapper.userInfo.regStatus = false

    else
      this.industry.userInfoMapper.userInfo.regStatus = true
    const register = this.userService.registrationService(this.industry).subscribe(data => {

      if (data.apiStatus.message === 'success') {
        this.message = "Registration Successfull"
        //console.log(data.apiStatus.message);
        // this.route.navigate(['/home']);
        this.add_industry.reset();
      } else {
        this.message = "Registration Failed"
        //console.log(data);
      }

    });
  }
  stack(str: string) {


    if (str == "Ambient") {
      //this.stackDisplay=false;

      $('#stack_123').css('display', 'none');
      this.types$ = [{ "Category": "PM10" }, { "Category": "PM2.5" },
      { "Category": "SOx" },
      { "Category": "NOx" }, { "Category": "NO" }, { "Category": "NO2" }, { "Category": "CO" }, { "Category": "CO2" }, {
        "Category": "Others"
      }];
    }
    else
      if (str == "Emission") {
        // this.stackDisplay=true;
        this.addProcesssubmitted = true;
        // $('.stackDisplay').css('display','block');
        $('#stack_123').css('display', 'block');

        this.types$ = [{ "Category": "PM" }, { "Category": "SO2" },
        { "Category": "NOx" },
        { "Category": "NO" }, { "Category": "NO2" }, { "Category": "SOx" }, { "Category": "HF" }, {
          "Category": "Others"
        }];
      }
      else
        if (str == "Effluent") {

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
