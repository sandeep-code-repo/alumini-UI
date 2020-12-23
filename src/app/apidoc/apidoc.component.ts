import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx'; 
import { Router } from '@angular/router';



@Component({
  selector: 'app-apidoc',
  templateUrl: './apidoc.component.html',
  styleUrls: ['./apidoc.component.scss']
})

export class ApidocComponent implements OnInit {
  
  fileName= '1349.xlsx';  
  constructor(private router: Router) { }

  pdfSrc = "../../assets/documents/1349.pdf";
  ngOnInit(): void {

    ////////alert('page under construction');
  
   

  }
 
  goback()
  {
    this.router.navigate(['/login'])
  }
}


