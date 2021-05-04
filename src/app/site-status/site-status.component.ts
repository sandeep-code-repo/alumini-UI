import { Component, Input, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { ISitestatus} from '../model/siteStatus'
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { LocalServiceService } from '../services/common/local-service.service';
import { Observable, merge } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

class Todo {
  camerastatus:string;
  slno: number;
  siteName: string;
  siteLabel: string;
  street:string;
  city:string;
  district:string;
  state:string;
  industryType:string;
  lastSynchronized:string;
  sitestatus:string;
  exceedence:string;
  vendor:string;
  siteId:string

}


@Component({
  selector: 'app-site-status',
  templateUrl: './site-status.component.html',
  styleUrls: ['./site-status.component.scss']
})
export class SiteStatusComponent implements OnInit , AfterViewInit{

  dropdownList = [];
  selectedItems = [];
  dropdownSettings :IDropdownSettings;
  router: any;
  elementSource: MatTableDataSource<Todo>;
  displayedColumns: string[];
  @ViewChild(MatSort,{static:false})MatSort
  @ViewChild(MatPaginator,{static:false})paginator:MatPaginator
  @ViewChild(MatSort) sort: MatSort;
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
  siteLabelFilter = new FormControl('');
  colourFilter = new FormControl('');
  petFilter = new FormControl('');
  cityFilter=new FormControl('');
  districtFilter=new FormControl('');
  stateFilter=new FormControl('');
  industryFilter=new FormControl('');
  SynchronizedFilter=new FormControl('');
  StatusFilter=new FormControl('');
  exceedanceFilter=new FormControl('');
  vendorFilter=new FormControl('');
  siteIdFilter=new FormControl('');
  dataSource = new MatTableDataSource();
  columnsToDisplay = ['id','action','siteName','siteLabel','street','city','district','state','industryType','lastSynchronized','siteStatus','exceedance','vendor','siteId'];
  filterValues = {
    action:'',
    siteName: '',
    siteLabel:'',
    street:'',
    city:'',
    district:'',
    state:'',
    industryType:'',
    lastSynchronized:'',
    siteStatus:'',
    exceedance:'',
    vendor:'',
    siteId:''
    //id: '',
    //colour: '',
    //pet: ''
  };
  profilename: any;
  isLoading: boolean;
 
  constructor( private userService: UserService,private storageService: LocalServiceService) {
    //this.dataSource.data = this.people;
    const todos: Todo[] = [
      {camerastatus:'no',slno:1, siteName: 'Power Plant India Ltd',siteLabel:'Power Plant India Ltd',street:'MK Street',city:'Bhubaneswar',district:'khodra',state:'odisha',industryType:'India Gov',lastSynchronized:'6 minutes ago',sitestatus:'active', exceedence:'NO',vendor:'vemdor',siteId:'hindalco_lpng'}  
    ];
    this.elementSource = new MatTableDataSource(todos);
    
   }
   form:FormGroup = new FormGroup({
    camerastatus: new FormControl(false),
    slno: new FormControl(false),
    siteName: new FormControl(false),
    siteLabel: new FormControl(false),
    street: new FormControl(false),
    city: new FormControl(false),
    district: new FormControl(false),
    state: new FormControl(false),
    industryType: new FormControl(false),

    lastSynchronized: new FormControl(false),

    sitestatus: new FormControl(false),

    exceedence: new FormControl(false),

    vendor: new FormControl(false),

    siteId: new FormControl(false),

   
    
  });
  camerastatus = this.form.get('camerastatus');

  slno = this.form.get('slno');
  siteName = this.form.get('siteName');
  siteLabel = this.form.get('siteLabel');
  street = this.form.get('street');
  city = this.form.get('city');
  district = this.form.get('district');
  state = this.form.get('state');
  industryType = this.form.get('industryType');
  lastSynchronized = this.form.get('lastSynchronized');
  sitestatus = this.form.get('sitestatus');
  exceedence = this.form.get('exceedence');
  vendor = this.form.get('vendor');

  siteId = this.form.get('siteId');

cbValues;

columns: string[];

columnDefinitions = [
  { def: 'camerastatus', label: 'Camera Status', hide: this.camerastatus.value},

  { def: 'slno', label: 'S.No', hide: this.slno.value},
  { def: 'siteName', label: 'Site Name', hide: this.siteName.value},
  {def:'siteLabel', label:'Site Label', hide:this.siteLabel.value},
  {def:'street', label:'Street', hide:this.street.value},
  {def:'city', label:'City', hide:this.city.value},
  {def:'district', label:'District', hide:this.district.value},
  {def:'state', label:'State', hide:this.state.value},
  {def:'state', label:'State', hide:this.state.value},
  {def:'industryType', label:'Industry Type', hide:this.industryType.value},
  {def:'lastSynchronized', label:'Last Synchronized', hide:this.lastSynchronized.value},
  {def:'sitestatus', label:'Site Status', hide:this.sitestatus.value},
  {def:'exceedence', label:'Exceedence', hide:this.exceedence.value},
  {def:'vendor', label:'Vendor', hide:this.vendor.value},
  {def:'siteId', label:'Site Id', hide:this.siteId.value}


]
getDisplayedColumns() {
  this.columns = this.columnDefinitions.filter(cd=>!cd.hide).map(cd=>cd.def);
}

  ngAfterViewInit() {
 this.dataSource.sort = this.sort;
 this.dataSource.paginator   = this.paginator;
 let o1:Observable<boolean>  = this.slno.valueChanges;
 let o2:Observable<boolean>  = this.siteName.valueChanges;
 let o3:Observable<boolean>  = this.siteLabel.valueChanges;
 let o4:Observable<boolean>  = this.street.valueChanges;
 let o5:Observable<boolean>  = this.city.valueChanges;
 let o6:Observable<boolean>  = this.district.valueChanges;
 let o7:Observable<boolean>  = this.state.valueChanges;
 let o8:Observable<boolean>  = this.industryType.valueChanges;
 let o9:Observable<boolean>  = this.lastSynchronized.valueChanges;
 let o10:Observable<boolean> = this.sitestatus.valueChanges;
 let o11:Observable<boolean> = this.exceedence.valueChanges;
 let o12:Observable<boolean> = this.vendor.valueChanges;
 let o13:Observable<boolean> = this.siteId.valueChanges;
 let o14:Observable<boolean>  = this.camerastatus.valueChanges;




   merge(o1, o2,o3,o4,o5,o6,o7,o8,o9,o10,o11,o12,o13,o14).subscribe( v=>{
    this.columnDefinitions[0].hide=this.slno.value;
    this.columnDefinitions[1].hide=this.siteName.value;  
    this.columnDefinitions[2].hide=this.siteLabel.value;
    this.columnDefinitions[3].hide=this.street.value;
    this.columnDefinitions[4].hide=this.city.value;
    this.columnDefinitions[5].hide=this.district.value;
    this.columnDefinitions[6].hide=this.state.value;
    this.columnDefinitions[7].hide=this.industryType.value;
    this.columnDefinitions[8].hide=this.lastSynchronized.value;
    this.columnDefinitions[9].hide=this.sitestatus.value;
    this.columnDefinitions[10].hide=this.exceedence.value;
    this.columnDefinitions[11].hide=this.vendor.value;
    this.columnDefinitions[12].hide=this.siteId.value;
    this.columnDefinitions[12].hide=this.camerastatus.value;


    console.log(this.columnDefinitions);
 
    this.getDisplayedColumns();
  });

  this.getDisplayedColumns();
}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  //  this.dataSource.filter = filterValue.trim().toLowerCase();
  //this.sortedData.filter = filterValue.trim().toLowerCase();
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
     this.siteLabelFilter.valueChanges
     .subscribe(
       siteLabel => {
        this.filterValues.siteLabel = siteLabel;
        this.dataSource.filter = JSON.stringify(this.filterValues);
      }
     )
     //
this.cityFilter.valueChanges
.subscribe(
  city=> {
    this.filterValues.city = city;
    this.dataSource.filter = JSON.stringify(this.filterValues);
  }
)
    this.districtFilter.valueChanges
    .subscribe(
      district=>{
        this.filterValues.district = district;
        this.dataSource.filter = JSON.stringify(this.filterValues);
      }
    )
    this.stateFilter.valueChanges
    .subscribe(
      state=>{
        this.filterValues.state = state;
        this.dataSource.filter = JSON.stringify(this.filterValues);
      }
    )
    this.industryFilter.valueChanges
    .subscribe(
      industryType=>{
        this.filterValues.industryType = industryType;
        this.dataSource.filter = JSON.stringify(this.filterValues);
      }
    )
    this.SynchronizedFilter.valueChanges
    .subscribe(
      lastSynchronized=>{
        this.filterValues.lastSynchronized = lastSynchronized;
        this.dataSource.filter = JSON.stringify(this.filterValues);
      }
    )
    this.StatusFilter.valueChanges
    .subscribe(
      siteStatus=>{
        this.filterValues.siteStatus = siteStatus;
        this.dataSource.filter = JSON.stringify(this.filterValues);
      }
    )
    this.exceedanceFilter.valueChanges
    .subscribe(
      exceedance=>{
        this.filterValues.exceedance = exceedance;
        this.dataSource.filter = JSON.stringify(this.filterValues);
      }
    )
    this.vendorFilter.valueChanges
    .subscribe(
      vendor=>{
        this.filterValues.vendor = vendor;
        this.dataSource.filter = JSON.stringify(this.filterValues);
      }
    )
    this.siteIdFilter.valueChanges
    .subscribe(
      siteId=>{
        this.filterValues.siteId = siteId;
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
        && data.siteLabel.toLowerCase().indexOf(searchTerms.siteLabel) !== -1
        && data.city.toLowerCase().indexOf(searchTerms.city) !== -1
        && data.district.toLowerCase().indexOf(searchTerms.district) !== -1
        && data.state.toLowerCase().indexOf(searchTerms.state) !== -1
        && data.industryType.toLowerCase().indexOf(searchTerms.industryType) !== -1
        && data.lastSynchronized.toLowerCase().indexOf(searchTerms.lastSynchronized) !== -1
        && data.siteStatus.toLowerCase().indexOf(searchTerms.siteStatus) !== -1
        && data.exceedance.toLowerCase().indexOf(searchTerms.exceedance) !== -1
        && data.vendor.toLowerCase().indexOf(searchTerms.vendor) !== -1
        && data.siteId.toLowerCase().indexOf(searchTerms.siteId) !== -1
        
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
