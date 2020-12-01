import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx'; 
import { Router } from '@angular/router';



@Component({
  selector: 'app-apidoc',
  templateUrl: './apidoc.component.html',
  styleUrls: ['./apidoc.component.css']
})

export class ApidocComponent implements OnInit {
  
  fileName= '1349.xlsx';  
  constructor(private router: Router) { }

  
  ngOnInit(): void {

    ////////alert('page under construction');
  
    $( document ).ready(function() {
   
      this.pdfsrc="a.pdf";
})

  }
 
  goback()
  {
    this.router.navigate(['/login'])
  }
}


