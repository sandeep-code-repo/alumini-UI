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
  
  userInfo: UserInfo;
  message: any;
  addProcesssubmitted: boolean;



  constructor(private route: Router, private userService: UserService, private formBuilder: FormBuilder, private HttpClient: HttpClient) {

  }



  ngOnInit(): void {

    this.processForm = this.formBuilder.group({
      analyzerv2: ['', [Validators.required]],
      stationId: ['', [Validators.required]],
      location: ['', [Validators.required]],
      stationVendor: ['', [Validators.required]],
      
      parameterInfo: this.formBuilder.array([this.createParameterInfo()]),
     
      certification: ['', [Validators.required]],
      longitute: ['', [Validators.required]],
      latitude: ['', [Validators.required]],
      measurementPrinciple: ['', [Validators.required]],
      stackHeight: ['', [Validators.required]],
      stackDiameter: ['', [Validators.required]],
      stackVelocity: ['', [Validators.required]],
      gasDischargeRate: ['', [Validators.required]],
      remarks: ['', [Validators.required]],

    })
    // this.parameterInfo.push(this.addParameter());
    // this.parameterinfo.push(this.createParameterInfo().value)
    this.stationInfo.push(this.processForm.value)
    
    this.add_industry = this.formBuilder.group({
      plantInfo:this.formBuilder.group({
        plantVendor:[''],
        plantUserName: ['', [Validators.required]],
        category: ['', [Validators.required]],
        plantName: ['', [Validators.required]],
        pin: ['', [Validators.required, Validators.minLength(7), CustomValidators.patternValidator(/\d/, { hasNumber: true })]],
        typ:[''],
        district: ['', [Validators.required]],
        town: ['', [Validators.required]],
        street: ['', [Validators.required]],
        state: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        roUser: ['', [Validators.required]],
        caaqmsStation: ['', [Validators.required]],
        cemsStation: ['', [Validators.required]],
        ceqmsStation: ['', [Validators.required]],
        authPerson: ['', [Validators.required]],
        authoPerMob: ['', [Validators.required, Validators.minLength(10), CustomValidators.patternValidator(/\d/, { hasNumber: true })]],
        authPersonDesig: ['', [Validators.required]],
        secdPerson: ['', [Validators.required]],
        secdPersonDesig: ['', [Validators.required]],
        secdPersonMob: ['', [Validators.required, Validators.minLength(10), CustomValidators.patternValidator(/\d/, { hasNumber: true })]],
        secdEmail: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        
      }),
     
     // role: ['',],
   userInfo:this.formBuilder.group({
    //plantUserName: [this.plantInfo., [Validators.required]],
    password:['',[Validators.required]],
    roleId:[''],
   })
     

     

    });


  }

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
      'unit': new FormControl('', Validators.required)
    })

  }
  // addStationInfo():FormGroup {

  //   this.formBuilder.group({
  //     analyzerv2: ['', [Validators.required]],
  //     stationId: ['', [Validators.required]],
  //     location: ['', [Validators.required]],
  //     stationVendor: ['', [Validators.required]],
  //     //analyserMake: ['', [Validators.required]],
  //     //analyserModel: ['', [Validators.required]],
  //     //analyserSerialNo: ['', [Validators.required]],
  //     //devidceIMEINo: ['', [Validators.required]],
  //     //macId: ['', [Validators.required]],
  //     //measurmentMin: ['', [Validators.required]],
  //     //measurmentMax: ['', [Validators.required]],
  //     parameterInfo: this.formBuilder.array([this.createParameterInfo()]),
  //     //unit: ['', [Validators.required]],
  //     certification: ['', [Validators.required]],
  //     longitute: ['', [Validators.required]],
  //     latitude: ['', [Validators.required]],
  //     measurementPrinciple: ['', [Validators.required]],
  //     stackHeight: ['', [Validators.required]],
  //     stackDiameter: ['', [Validators.required]],
  //     stackVelocity: ['', [Validators.required]],
  //     gasDischargeRate: ['', [Validators.required]],
  //     remarks: ['', [Validators.required]],


  //   })
  // }

  editProcess(editProcessObj) {
    this.processForm.patchValue({
      analyzerv2: editProcessObj.analyzerv2,
      stationId: editProcessObj.stationId,
      location: editProcessObj.location,
      stationVendor: editProcessObj.stationVendor,
      //analyserMake: editProcessObj.analyserMake,
      //analyserModel: editProcessObj.analayserModel,
      //analyserSerialNo: editProcessObj.analyserSerialNo,
      //devidceIMEINo: editProcessObj.devidceIMEINo,
      //macId: editProcessObj.macId,
      //measurmentMin: editProcessObj.measurmentMin,
      //measurmentMax: editProcessObj.measurmentMax,
      parameterInfo: editProcessObj.parameterInfo,
      //unit: editProcessObj.unit,
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

  get processf() { return this.processForm.controls }
 
  addProcess() {

    
    // this.addProcesssubmitted=true;
    // if (this.processForm.invalid) {

    //      return;
    //    }
    let index = this.stationInfo.findIndex(item => {
      return item.stationId == this.processForm.controls.stationId.value;
    });


    if (this.stationInfo.length == 1 && this.stationInfo[0].stationId === "") {

      this.stationInfo = [];
      this.stationInfo.push(this.processForm.value);
    }
    else if (index > -1) {

      this.stationInfo.splice(index, 1, this.processForm.value)
      
    } else {
      this.stationInfo.push(this.processForm.value);
    }
    this.processForm.reset();
  }
  register() {
   // this.submitted=true;
   
    // if (this.add_industry.invalid) {

    //   return;
    // }


    this.industry = this.add_industry.value
    if(this.add_industry.get('userInfo').status=='INVALID')
    this.industry.regstatus = "INACTIVE"
    else 
    this.industry.regstatus = "ACTIVE"
    this.industry.stationInfo = this.stationInfo;
    this.industry.userInfo.userRole=[{roleid:this.add_industry.get('userInfo.roleId').value}]
   //  this.industry.regstatus = "register";
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
