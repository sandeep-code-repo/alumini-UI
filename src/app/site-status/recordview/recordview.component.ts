

import { Component, OnInit,ViewChild,AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import {MatButtonToggle} from '@angular/material/button-toggle';
import { MatTableDataSource } from "@angular/material/table";
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Observable, merge, from } from 'rxjs';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator'

class Todo {
  slno: number;
  parameterName: string;
  currentValue: string;
  Threshold:string;
  AvgValue:string;
  MinValue:string;
  MaxValue:string

}



@Component({
  selector: 'app-recordview',
  templateUrl: './recordview.component.html',
  styleUrls: ['./recordview.component.scss']
})
export class RecordviewComponent implements OnInit,  AfterViewInit{
 

  dropdownList = [];
  selectedItems = [];
  dropdownSettings :IDropdownSettings;
  dataSource: MatTableDataSource<Todo>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatSort,{static:false})MatSort
  @ViewChild(MatPaginator,{static:false})paginator:MatPaginator
  isLoading: boolean;
  industryDropDownService: any;
  displayedColumns: string[];

  
  constructor( private cd:ChangeDetectorRef) { 
    const todos: Todo[] = [
      {slno:1, parameterName: 'CEMS1_DRI KILN 1-2-PM',currentValue:'NA',Threshold:'100',AvgValue:'NA',MinValue:'NA',MaxValue:'NA'},
      {slno:2, parameterName: 'CEMS1_DRI KILN 1-2-SO2',currentValue:'NA',Threshold:'0',AvgValue:'NA',MinValue:'NA',MaxValue:'NA'},
      {slno:3, parameterName: 'CEMS2_DRI KILN 3-4-PM',currentValue:'62.5',Threshold:'100',AvgValue:'62.50',MinValue:'62.50',MaxValue:'62.50'},
      {slno:4, parameterName: 'CEMS2_DRI KILN 3-4-SO2',currentValue:'47.97',Threshold:'0',AvgValue:'47.97',MinValue:'47.97',MaxValue:'60.76'}
      
    ];
    this.dataSource = new MatTableDataSource(todos);
  }
  ngOnInit(): void {

     this.isLoading = true;
    this.cd.detectChanges();
    throw new Error('Method not implemented.');
}
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    //  this.dataSource.filter = filterValue.trim().toLowerCase();
    //this.sortedData.filter = filterValue.trim().toLowerCase();
    }
  
  form:FormGroup = new FormGroup({
    slno: new FormControl(false),
    parameterName: new FormControl(false),
    currentValue: new FormControl(false),
    Threshold: new FormControl(false),
    AvgValue: new FormControl(false),
    MinValue: new FormControl(false),
    MaxValue: new FormControl(false),
   
    
  });
    slno = this.form.get('slno');
    parameterName = this.form.get('parameterName');
    currentValue = this.form.get('currentValue');
    Threshold = this.form.get('Threshold');
    AvgValue = this.form.get('AvgValue');
    MinValue = this.form.get('MinValue');
    MaxValue = this.form.get('MaxValue');
  cbValues;

  columns: string[];

  columnDefinitions = [
    { def: 'slno', label: 'S.No', hide: this.slno.value},
    { def: 'parameterName', label: 'Parameter Name', hide: this.parameterName.value},
    {def:'currentValue', label:'Current Value', hide:this.currentValue.value},
    {def:'Threshold', label:'Threshold', hide:this.Threshold.value},
    {def:'AvgValue', label:'Avg. Value', hide:this.AvgValue.value},
    {def:'MinValue', label:'Min Value', hide:this.MinValue.value},
    {def:'MaxValue', label:'Max Value', hide:this.MaxValue.value}


  ]

  getDisplayedColumns() {
    this.columns = this.columnDefinitions.filter(cd=>!cd.hide).map(cd=>cd.def);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
let o1:Observable<boolean> = this.slno.valueChanges;
   let o2:Observable<boolean> = this.parameterName.valueChanges;
   let o3:Observable<boolean>= this.currentValue.valueChanges;
   let o4:Observable<boolean>= this.Threshold.valueChanges;
   let o5:Observable<boolean>= this.AvgValue.valueChanges;
   let o6:Observable<boolean>= this.MinValue.valueChanges;
   let o7:Observable<boolean>= this.MaxValue.valueChanges;


   merge(o1, o2,o3,o4,o5,o6,o7).subscribe( v=>{
   this.columnDefinitions[0].hide = this.slno.value;
   this.columnDefinitions[1].hide = this.parameterName.value;  
   this.columnDefinitions[2].hide=this.currentValue.value;
   this.columnDefinitions[3].hide=this.Threshold.value;
   this.columnDefinitions[4].hide=this.AvgValue.value;
   this.columnDefinitions[5].hide=this.MinValue.value;
   this.columnDefinitions[6].hide=this.MaxValue.value;
   


      console.log(this.columnDefinitions);
 
      this.getDisplayedColumns();
    });

    this.getDisplayedColumns();



    this.dropdownList = [
      {item_id:1,  item_text :' Parameter Name'},
      {item_id:2,  item_text :'Current Value'},
      {item_id:3,  item_text :'Threshold'},
      {item_id:4,  item_text :'Avg. Value'},
      {item_id:5,  item_text :'Min Value'},
      {item_id:6,  item_text :'Max Value'},

  ];
   this.selectedItems = [
     {item_id:1, item_text:'Parametername'},
     {item_id:2, item_text:'Currentvalue'},
     {item_id:4,  item_text :'Threshold'},
      {item_id:5,  item_text :'Avg. Value'},
      {item_id:6,  item_text :'Min Value'},
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
   onItemSelect(item:any){
     console.log('onItemSelect',item);
   }
   OnSelectAll(items:any){
     console.log('onSelectAll,items');
   }

   
  }

