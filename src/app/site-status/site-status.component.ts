import { Component, Input, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { ISitestatus} from '../model/siteStatus'
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { LocalServiceService } from '../services/common/local-service.service';
@Component({
  selector: 'app-site-status',
  templateUrl: './site-status.component.html',
  styleUrls: ['./site-status.component.scss']
})
export class SiteStatusComponent implements OnInit {

  dropdownList = [];
  selectedItems = [];
  dropdownSettings :IDropdownSettings;
  router: any;

 
  headers = ['SL.No', 'Action', 'Site Name', 'Site Label', 'Street', 'City', 'District', 'State', "Industry Type", 'Last Synchronized', 'Site Status', 'Exceedance', 'Vendor','Site ID'];
  index  = ['SL.No', 'Action', 'Site Name', 'Site Label', 'Street', 'City', 'District', 'State', "Industry Type", 'Last Synchronized', 'Site Status', 'Exceedance', 'Vendor','Site ID'];
  siteStatus:ISitestatus[] =[];


  // people = [
  //   {
  //     name: 'John',
  //     id: 1,
  //     colour: 'Green',
  //     pet: 'Dog'
  //   },
  //   {
  //     name: 'Sarah',
  //     id: 2,
  //     colour: 'Purple',
  //     pet: 'Cat'
  //   },
  //   {
  //     name: 'Lindsay',
  //     id: 3,
  //     colour: 'Blue',
  //     pet: 'Lizard'
  //   },
  //   {
  //     name: 'Megan',
  //     id: 4,
  //     colour: 'Orange',
  //     pet: 'Dog'
  //   }
  // ];

  nameFilter = new FormControl('');
  streetFilter = new FormControl('');
  colourFilter = new FormControl('');
  petFilter = new FormControl('');
  dataSource = new MatTableDataSource();
  columnsToDisplay = ['id','siteName','street'];
  filterValues = {
    siteName: '',
    street:'',
    //id: '',
    //colour: '',
    //pet: ''
  };
  profilename: any;
  isLoading: boolean;
 




  constructor( private userService: UserService,private storageService: LocalServiceService) {

    //this.dataSource.data = this.people;
    
   }
   
  ngOnInit(): void {
    if (localStorage.isLogin) {
      //this.isLogin= this.storageService.getJsonValue('isLogin')
      this.profilename = this.storageService.getJsonValue('loggedInUserData').userName;
    }
    this.isLoading = true
this.userService.getsiteStatus(this.profilename,'ALL','ALL').subscribe(
  (response)=>{
    if (response.apiStatus.message === 'success') {
    console.log(response)
    this.isLoading = false;
    this.dataSource.data=response.data
    //this.siteStatus=Response
    //console.log(this.dataSource)
    this.dataSource.filterPredicate = this.createFilter();
    }
    else{
      this.isLoading = false;
      this.dataSource.data=[]
    }
    
  },
  
    (Error)=>{
      console.log("Error Occured:"+Error)
    }
  
)

this.nameFilter.valueChanges
      .subscribe(
        siteName => {
          this.filterValues.siteName = siteName;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
      this.streetFilter.valueChanges
      .subscribe(
        street => {
          this.filterValues.street = street;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
     )
    // this.streetFilter.valueChanges
    //   .subscribe(
    //     id => {
    //       this.filterValues.id = id;
    //       this.dataSource.filter = JSON.stringify(this.filterValues);
    //     }
    //   )
    // this.colourFilter.valueChanges
    //   .subscribe(
    //     colour => {
    //       this.filterValues.colour = colour;
    //       this.dataSource.filter = JSON.stringify(this.filterValues);
    //     }
    //   )
    // this.petFilter.valueChanges
    //   .subscribe(
    //     pet => {
    //       this.filterValues.pet = pet;
    //       this.dataSource.filter = JSON.stringify(this.filterValues);
    //     }
    //   )
  



this.dropdownList = [
     {item_id:1,  item_text :'Site Name'},
     {item_id:2,  item_text :'Site Label'},
     {item_id:3,  item_text :'Camera Status'},
     {item_id:4,  item_text :'Street'},
     {item_id:5,  item_text :'City'},
     {item_id:6,  item_text :'District'},
     {item_id:7,  item_text :'RO'},
     {item_id:8,  item_text :'State'},
     {item_id:9,  item_text :'Post Code'},
     {item_id:10, item_text :'Country'},
     {item_id:11, item_text :'Industry Type'},
     {item_id:12, item_text :'Date Of Configuration'},
     {item_id:13, item_text :'Last Synchronized Sort'},
     {item_id:14, item_text :'Last Synchronized'},
     {item_id:15, item_text :'Site Status'},
     {item_id:16, item_text :'Excedence '},
     {item_id:17, item_text :'Vendor'},
     {item_id:18, item_text :'Last Syncronized Time'},
     {item_id:19, item_text :'Phone Numbers'},
     {item_id:20, item_text :'Site ID'},
     {item_id:21, item_text :'Industry MIS ID'}
 ];
  this.selectedItems = [
    {item_id:1, item_text:'site name'},
    {item_id:2, item_text:'Site Label'},
    {item_id:4,  item_text :'Street'},
     {item_id:5,  item_text :'City'},
     {item_id:6,  item_text :'District'},
  ];
  this.dropdownSettings={
    singleSelection:false,
    idField:'item_id',
    textField:'item_text',
    selectAllText:'Select All',
    unSelectAllText:'Unselect All',
    itemsShowLimit:5,
    allowSearchFilter:true
  };
  
  }

  createFilter(): (data: any, filter: string) => boolean {
    let filterFunction = function(data, filter): boolean {
      let searchTerms = JSON.parse(filter);
      return data.siteName.toLowerCase().indexOf(searchTerms.siteName) !== -1
        && data.street.toString().toLowerCase().indexOf(searchTerms.street) !== -1
        //&& data.colour.toLowerCase().indexOf(searchTerms.colour) !== -1
        //&& data.pet.toLowerCase().indexOf(searchTerms.pet) !== -1;
    }
    return filterFunction;
  }

  onItemSelect(item:any){
    console.log('onItemSelect',item);
  }
  OnSelectAll(items:any){
    console.log('onSelectAll,items');
  }
 
 goback()
 {
   this.router.navigateByUrl("/regdetails")
 }
 
}
