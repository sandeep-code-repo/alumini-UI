import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { ValidationService } from '../services/config/config.service';
import { routerTransition } from '../services/config/config.service';
import { AgGridModule } from 'ag-grid-angular';
import { UserService } from '../services/user/user.service';
import { PlantInfoData } from 'src/app/plant-info-data';
import { stringify } from '@angular/compiler/src/util';
import { HttpClient } from '@angular/common/http';
import { TooltipModule } from '@syncfusion/ej2-angular-popups';
import { CustomValidators } from 'src/app/custom-validators';
import { Industry, ParameterInfo, StationInfo, UserInfo } from '../model/industry.model';
import { NgbPanelTitle } from '@ng-bootstrap/ng-bootstrap';



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
  stationInfo: StationInfo[] = [];
  submitted: Boolean = false;
  parameterinfo: ParameterInfo[] = []
  userInfo: UserInfo;
  message: any;



  constructor(private route: Router, private userService: UserService, private formBuilder: FormBuilder, private HttpClient: HttpClient) {

  }



  ngOnInit(): void {

    this.parameterinfo = [{
      paramter: 'CO',
      analyserMake: 'A',
      analyserModel: 'A',
      analyserSerialNo: 'A',
      devidceIMEINo: '123400987',
      macId: '12',
      measurmentMin: '20',
      measurmentMax: '90',
      unit: 'nm/c3'
    }];
    this.processForm = this.formBuilder.group({
      analyzerv2: ['', [Validators.required]],
      stationId: ['', [Validators.required]],
      location: ['', [Validators.required]],
      stationVendor: ['', [Validators.required]],
      analyserMake: ['', [Validators.required]],
      analyserModel: ['', [Validators.required]],
      analyserSerialNo: ['', [Validators.required]],
      devidceIMEINo: ['', [Validators.required]],
      macId: ['', [Validators.required]],
      measurmentMin: ['', [Validators.required]],
      measurmentMax: ['', [Validators.required]],
      parameterInfo: ['', [Validators.required]],
      unit: ['', [Validators.required]],
      certification: ['', [Validators.required]],
      longitute: ['', [Validators.required]],
      latitude: ['', [Validators.required]],
      measurementPrinciple: ['', [Validators.required]],
      stackHeight: ['', [Validators.required]],
      stackDiameter: ['', [Validators.required]],
      stackVelocity: ['', [Validators.required]],
      gasDischargeRate: ['', [Validators.required]],
      remarks: ['', [Validators.required]]
    })

    this.stationInfo.push(this.processForm.value)
    //localStorage.setItem('length', String(0));

    //this.containers.length = Number(localStorage.getItem('length'));
    //this.add();
    // if(this.industry)


    this.add_industry = this.formBuilder.group({

      password: ['', [Validators.required, CustomValidators.patternValidator(/\d/, { hasNumber: true }), CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }), CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }), Validators.minLength(8)]],
      plantName: ['', [Validators.required]],
      category: ['', [Validators.required]],
      plantVendor: ['', [Validators.required]],
      plantUserName: ['', [Validators.required]],
      district: ['', [Validators.required]],
      roUser: ['', [Validators.required]],
      caaqmsStation: ['', [Validators.required]],
      cemsStation: ['', [Validators.required]],
      ceqmsStation: ['', [Validators.required]],
      authPerson: ['', [Validators.required]],
      authPersonDesig: ['', [Validators.required]],
      authoPerMob: ['', [Validators.required, Validators.minLength(10), CustomValidators.patternValidator(/\d/, { hasNumber: true })]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      secdPerson: ['', [Validators.required]],
      secdPersonDesig: ['', [Validators.required]],
      secdPersonMob: ['', [Validators.required, Validators.minLength(10), CustomValidators.patternValidator(/\d/, { hasNumber: true })]],
      secdEmail: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      street: ['', [Validators.required]],
      town: ['', [Validators.required]],
      role: ['',],
      state: ['', [Validators.required]],
      pin: ['', [Validators.required, Validators.minLength(7), CustomValidators.patternValidator(/\d/, { hasNumber: true })]],

      //*********network connection details******//
      stationInfo: this.formBuilder.array([]),
      // ind_network_conn_data_trans: ['', [Validators.required]],
      //sind_network_con_historical_data_activity: ['', [Validators.required]],


      // analyzerv2Edit: ['', [Validators.required]],

    });


  }

  clear(input: HTMLInputElement) {

    input.value = ''; // null should work too, but as the type ov the value is string I like to use ''
  }

  editProcess(editProcessObj) {



    this.processForm.patchValue({
      analyzerv2: editProcessObj.analyzerv2,
      stationId: editProcessObj.stationId,
      location: editProcessObj.location,
      stationVendor: editProcessObj.stationVendor,
      analyserMake: editProcessObj.analyserMake,
      analyserModel: editProcessObj.analayserModel,
      analyserSerialNo: editProcessObj.analyserSerialNo,
      devidceIMEINo: editProcessObj.devidceIMEINo,
      macId: editProcessObj.macId,
      measurmentMin: editProcessObj.measurmentMin,
      measurmentMax: editProcessObj.measurmentMax,
      paramter: editProcessObj.paramter,
      unit: editProcessObj.unit,
      certification: editProcessObj.certification,
      longitute: editProcessObj.longitute,
      latitude: editProcessObj.lattitude,
      measurementPrinciple: editProcessObj.measurementPrinciple,
      stackHeight: editProcessObj.stackHeight,
      stackDiameter: editProcessObj.stackDiameter,
      stackVelocity: editProcessObj.stackVelocity,
      gasDischargeRate: editProcessObj.gasDischargeRate,
      remarks: editProcessObj.remarks
    })
  }


  goback() {
    this.route.navigateByUrl("/regdetails");
  }
  get f() { return this.add_industry.controls; }


  addProcess() {
    // console.log(this.processForm);
    // this.submitted = true;
    // if (this.processForm.invalid) {

    //   return;
    // }
    //var obarry = this.stationInfo.filter(item => item.stationId === this.processForm.controls.stationId.value)
    let index = this.stationInfo.findIndex(item => {
      return item.stationId == this.processForm.controls.stationId.value;
    });


    if (this.stationInfo.length == 1 && this.stationInfo[0].stationId === "") {

      this.stationInfo = [];
      this.stationInfo.push(this.processForm.value);
    }
    else if (index > -1) {

      this.stationInfo.splice(index, 1, this.processForm.value)
      // logis to remove this obj from list
    } else {
      this.stationInfo.push(this.processForm.value);
    }


    this.processForm.reset();
  }
  register() {
    // if (this.add_industry.invalid) {

    //   return;
    // }


    this.industry = this.add_industry.value
    this.stationInfo.forEach(element => {
      element.parameterInfo = this.parameterinfo;
    });
    this.industry.stationInfo = this.stationInfo;
    this.industry.plantInfo = {
      plantUserName: this.add_industry.value.plantUserName,
      category: this.add_industry.value.category,
      plantName: this.add_industry.value.plantName,
      pin: this.add_industry.value.pin.pin,
      typ:"company",
      district: this.add_industry.value.district,
      town: this.add_industry.value.town,
      street: this.add_industry.value.street,
      state: this.add_industry.value.state,
      email: this.add_industry.value.email,
      roUser: this.add_industry.value.roUser,
      caaqmsStation: this.add_industry.value.caaqmsStation,
      cemsStation: this.add_industry.value.cemsStation,
      ceqmsStation: this.add_industry.value.ceqmsStation,
      authPerson: this.add_industry.value.authPerson,
      authoPerMob: this.add_industry.value.authoPerMob,
      authPersonDesig: this.add_industry.value.authPersonDesig,
      secdPerson: this.add_industry.value.secdPerson,
      secdPersonDesig: this.add_industry.value.secdPersonDesig,
      secdPersonMob: this.add_industry.value.secdPersonMob,
      secdEmail: this.add_industry.value.secdEmail
    }

    this.industry.userInfo =
    {
      password: this.add_industry.value.password,
      userRole: [{ roleid: this.add_industry.value.role }],
      mobNo: this.add_industry.value.authoPerMob,
      department: this.add_industry.value.department||'Dispur',
      designation: this.add_industry.value.authPersonDesig
    }
    this.industry.regstatus = "register";
    console.log(this.industry);
    //console.log(this.userService.registrationService( this.industry ));
    const register = this.userService.registrationService(this.industry).subscribe(data => {



      if (data.apiStatus.message === 'success') {
        this.message = "Registration Successfully"
        console.log(data.apiStatus.message);
        // this.route.navigate(['/home']);

      } else {
        this.message = "Registration Failed"
        console.log(data);
      }

    });
  }
}
