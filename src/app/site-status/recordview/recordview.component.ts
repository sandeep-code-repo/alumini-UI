import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-recordview',
  templateUrl: './recordview.component.html',
  styleUrls: ['./recordview.component.scss']
})
export class RecordviewComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings :IDropdownSettings;
  router: any;
  constructor() { }

  ngOnInit(): void {

    this.dropdownList = [
      {item_id:1,  item_text :'Parameter Name'},
      {item_id:2,  item_text :'Current Value'},
      {item_id:3,  item_text :'Threshold'},
      {item_id:4,  item_text :'Avg. Value '},
      {item_id:5,  item_text :'Min Value'},
      {item_id:6,  item_text :'Max Value'},
      
  ];
   this.selectedItems = [
     {item_id:1, item_text:'Parameter Name'},
     {item_id:2, item_text:'Current Value'},
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


