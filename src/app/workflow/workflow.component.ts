import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { LocalServiceService } from '../services/common/local-service.service';
import { StationInfoMapper, Industry, PlantInfo } from '../model/industry.model';
import { IndustryService } from '../services/user/industry.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { WorkflowModel } from '../model/workflow.model';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss'],
  providers:[DatePipe]
})
export class WorkflowComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

    profilename: string;
    stationList:StationInfoMapper[]=[];
    plantInfo:PlantInfo;
    industryData:Industry;
    filterOptionForm: FormGroup;
    model=new WorkflowModel("","","","",new Date(),new Date());
    constructor(private router: Router, public datepipe: DatePipe,private formBuilder: FormBuilder, private userService: UserService,private industryService:IndustryService,private storageService:LocalServiceService) { }
  
    ngOnInit(): void {
     
      if(localStorage.isLogin){
        
        this.profilename=this.storageService.getJsonValue('loggedInUserData').userName;
       }
     
      this.industryService.getIndustryData(this.profilename).subscribe(res =>{
        if(res.apiStatus.message === 'success') 
        {
          this.industryData=res.data;
         this.plantInfo = this.industryData.plantInfo;
          this.stationList=this.industryData.stationInfoMapper
        }
       });
this.dropdownList = [
  { item_id: 1, item_text: 'Action Site Name' },
  { item_id: 2, item_text: 'City' },
  { item_id: 3, item_text: 'StationType' },
  { item_id: 4, item_text: 'StationName' },
  { item_id: 5, item_text: 'Event' },
  { item_id: 6, item_text: 'Category' },
  { item_id: 7, item_text: 'End time' },
  { item_id: 8, item_text: 'Time To Respond' },
  { item_id: 9, item_text: 'Time To Action' },
  { item_id: 10, item_text: 'Status' },
  { item_id: 11, item_text: 'Assigned To' },
  { item_id: 12, item_text: 'Last Acted By' },
  { item_id: 13, item_text: 'Visibility' },
  { item_id: 14, item_text: 'Description' }
];
this.selectedItems = [
  { item_id: 3, item_text: 'StationType' },
  { item_id: 5, item_text: 'Event' },
  { item_id: 6, item_text: 'Category' },
  { item_id: 10, item_text: 'Status' },
  
];
this.dropdownSettings={
  singleSelection: false,
  idField: 'item_id',
  textField: 'item_text',
  selectAllText: 'Select All',
  unSelectAllText: 'UnSelect All',
  itemsShowLimit: 3,
  allowSearchFilter: true
};
    }
onItemSelect(item: any) {
console.log(item);
}
onSelectAll(items: any) {
console.log(items);
};


    goback() {
      this.router.navigateByUrl("/regdetails");
    }
    addworkflow(){
      this.router.navigateByUrl("/addworkflow");
    }

  }
