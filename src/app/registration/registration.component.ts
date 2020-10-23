import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ValidationService } from '../services/config/config.service';
import { routerTransition } from '../services/config/config.service';
import { AgGridModule } from 'ag-grid-angular';
import { UserService } from '../services/user/user.service';
import { PlantInfoData } from 'src/app/plant-info-data';
import { stringify } from '@angular/compiler/src/util';
import { HttpClient } from '@angular/common/http';
import { TooltipModule } from '@syncfusion/ej2-angular-popups';
import { CustomValidators } from 'src/app/custom-validators';
import { Industry, StationInfo } from '../model/industry.model';
import { NgbPanelTitle } from '@ng-bootstrap/ng-bootstrap';


class DynamicGrid {
  title1: string;
  title2: string;
  title3: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})


export class RegistrationComponent implements OnInit {

  industry: Industry;

  containers = [];


  add_industry: FormGroup;

  plant: PlantInfoData;
  stationInfo: StationInfo[];
  submitted: false;




  constructor(private route: Router, private register: UserService, private formBuilder: FormBuilder, private HttpClient: HttpClient) {

  }



  ngOnInit(): void {
    //start

    //  alert(this.plant);



    //end


    localStorage.setItem('length', String(0));

    this.containers.length = Number(localStorage.getItem('length'));
    this.add();



    this.add_industry = this.formBuilder.group({
      submitted: false,
      password: ['', [Validators.required, CustomValidators.patternValidator(/\d/, { hasNumber: true }), CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }), CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }), Validators.minLength(8)]],
      plantName: ['', [Validators.required]],
      typ: ['', [Validators.required]],
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
      // district: ['', [Validators.required]],
      state: ['', [Validators.required]],
      pin: ['', [Validators.required, Validators.minLength(7), CustomValidators.patternValidator(/\d/, { hasNumber: true })]],

      //*********network connection details******//

      // ind_network_conn_data_trans: ['', [Validators.required]],
      //sind_network_con_historical_data_activity: ['', [Validators.required]],
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
      paramter: ['', [Validators.required]],
      unit: ['', [Validators.required]],
      certification: ['', [Validators.required]],
      longitute: ['', [Validators.required]],
      latitude: ['', [Validators.required]],
      measurementPrinciple: ['', [Validators.required]],
      stackHeight: ['', [Validators.required]],
      stackDiameter: ['', [Validators.required]],
      stackVelocity: ['', [Validators.required]],
      gasDischargeRate: ['', [Validators.required]],
      remarks: ['', [Validators.required]],

      analyzerv2Edit: ['', [Validators.required]],

    });
  }

  clear(input: HTMLInputElement) {

    input.value = ''; // null should work too, but as the type ov the value is string I like to use ''
  }

  OnClick() {

  }
  add() {
    this.containers.length = Number(localStorage.getItem('length'));
    this.containers.push(this.containers.length);

    localStorage.setItem('length', String(this.containers.length + 1));


  }




  goback() {
    this.route.navigateByUrl("/regdetails");
  }
  get f() { return this.add_industry.controls; }

  Insert() {

    // this.submitted = true;
    if (this.add_industry.invalid) {
      // alert('Please Fillup All Data');
      // return;
    }
    else {

      const register = this.register.insert(this.plant).subscribe(data => {
        debugger;


        if (data.apiStatus.message === "success") {

          //	window.localStorage.setItem('token', data.result.token);

          // this.route.navigate(['/login']);
          alert('Saved Data');

        } else {
          //this.invalidLogin = true;
          //alert('data is'+data.data);
          console.log(data);
        }

      });

    }


  }
  addProcess() {
    const stationInfo: StationInfo = {
      analyzerv2: this.add_industry.get('analyzerv2Edit').value,
      stationId:this.add_industry.get('stationId').value,
    };
    this.stationInfo.push(stationInfo);
    console.log(this.stationInfo);
  }

}
