import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-excel',
  templateUrl: './employee-excel.component.html',
  styleUrls: ['./employee-excel.component.css']
})
export class EmployeeExcelComponent implements OnInit {
filename:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }

  exportexcel(): void 
  {
   // this.filename= 'RegisterSheet.xlsx';
     /* table id is passed over here */   
   //  let element = document.getElementById('excel-table'); 
    // const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

     /* generate workbook and add the worksheet */
   //  const wb: XLSX.WorkBook = XLSX.utils.book_new();
    // XLSX.utils.book_append_sheet(wb, ws, 'Register');
     

     /* save to file */
   //  XLSX.writeFile(wb, this.filename);

   let link = document.createElement("a");
        link.download = "registration-excel";
        link.href = "assets/images/registration-excel.xlsx";
        link.click();
    
  }
  goback()
  {
    this.router.navigate(['/login']);
  }
}
