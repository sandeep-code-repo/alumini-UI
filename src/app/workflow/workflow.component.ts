import { ChangeDetectorRef, Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { LocalServiceService } from '../services/common/local-service.service';
import { StationInfoMapper, Industry, PlantInfo } from '../model/industry.model';
import { IndustryService } from '../services/user/industry.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { WorkflowModel } from '../model/workflow.model';
import { MatTableDataSource } from "@angular/material/table";
import { Observable, merge } from 'rxjs';
import {MatSort } from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {FormsModule, NgForm} from '@angular/forms';





@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss'],
  providers:[DatePipe]
})
export class WorkflowComponent implements OnInit {
  
 

  // dropdownList = [];
  // selectedItems = [];
  // dropdownSettings = {};

    profilename: string;
    stationList:StationInfoMapper[]=[];
    plantInfo:PlantInfo;
    industryData:Industry;
    filterOptionForm: FormGroup;
    model=new WorkflowModel("","","","",new Date(),new Date());
    @ViewChild(MatSort, {static: false}) sort: MatSort;
     
    @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  sortedData: any;
  
  getWorkflow: any;
  isLoading: boolean;
    constructor(private router: Router, public datepipe: DatePipe,private userService: UserService,private industryService:IndustryService,private storageService:LocalServiceService,private cd: ChangeDetectorRef) {
    const todos: Todo[] = [
      { slno: 1,action:'xyz',siteName:'Grewal Associates(P)Ltd.',city:'Matkambeda',stationType:'Emission',stationName:'CEMS_1',event:'bb',
      category:'Site Down',startTime:'2021-03-18T16:38:43Z',endTime:'2021-03-19T16:38:43Z',timetoRespond:'2021-03-18T16:38:4',
      timetoAction:'2021-03-19T16:38:4',status:'Not Started',assignedTo:'EpicCell',lastActBy:'GrewalAPL',visibility:'abc', description: 'complete example'},{slno: 2,action:'xyz',siteName:'Grewal Associates(P)Ltd.',city:'Matkambeda',stationType:'Emission',stationName:'CEMS_1',event:'bb',
      category:'Site Down',startTime:'2021-03-18T16:38:43Z',endTime:'2021-03-19T16:38:43Z',timetoRespond:'2021-03-18T16:38:4',
      timetoAction:'2021-03-19T16:38:4',status:'Not Started',assignedTo:'EpicCell',lastActBy:'GrewalAPL',visibility:'abc', description: 'complete example'}];
    this.dataSource = new MatTableDataSource(todos);
    }
    columnsChecked = new FormControl();
    
  
    
  
    columns: string[]=['slno','action','siteName','city','stationType'];
   
  
    columnDefinitions = [
      { def: 'siteName', label: 'Site Name'},
      { def: 'city', label: 'City'},
     
      { def: 'stationType', label: 'Station Type'},
      
      // { def: 'stationName', label: 'Station Name', hide: this.stationName.value},
      // { def: 'event', label: 'Event', hide: this.event.value},
      // { def: 'category', label: 'Category', hide: this.category.value},
      // { def: 'startTime', label: 'Start Time', hide: this.startTime.value},
      // { def: 'endTime', label: 'End time', hide: this.endTime.value},
      // { def: 'timetoRespond', label: 'Time To Respond', hide: this.timetoRespond.value},
      // { def: 'timetoAction', label: 'Time To Action', hide: this.timetoAction.value},
      // { def: 'status', label: 'Status', hide: this.status.value},
      // { def: 'assignedTo', label: 'Assigned To', hide: this.assignedTo.value},
      // { def: 'lastActBy', label: 'Last Acted By', hide: this.lastActBy.value},
      // { def: 'visibility', label: 'Visibility', hide: this.visibility.value},
      // { def: 'description', label: 'Description', hide: this.description.value}
    ]
  
    // getDisplayedColumns() {
    //   this.columns = this.columnDefinitions.filter(cd=>cd.hide).map(cd=>cd.def);
    //   this.isLoading = true;
    //   this.cd.detectChanges();
    // }
    
    dataSource: MatTableDataSource<Todo>;
   
  
    ngOnInit(): void {
      
      this.userService.workflowpage().subscribe(response=>{
        if(response.apiStatus.message === 'success')
        {
          
          this.isLoading=false;
          this.dataSource.data=response.data;
        }

      })
     
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
      }
      applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
       this.dataSource.filter = filterValue.trim().toLowerCase();
      this.sortedData.filter = filterValue.trim().toLowerCase();
      }

goback() {
  this.router.navigateByUrl("/regdetails");
}
addworkflow(){
  this.router.navigateByUrl("/addworkflow");
}
updateworkflow(){
  this.router.navigateByUrl("/updateworkflow");
}
onSelcetColumn(){

console.log(this.columnsChecked.value)
//let o1:Observable<boolean> = this.slno.valueChanges;
this.columns = this.columnsChecked.value 

}
}
class Todo {
  slno: number;
  action:string;
  siteName:string;
  city:string;
  stationType:string;
  stationName:string;
  event:string;
  category:string;
  startTime:string;
  endTime:string;
  timetoRespond:string;
  timetoAction:string;
  status:string;
  assignedTo:string;
  lastActBy:string;
  visibility:string;
  description: string;

}


