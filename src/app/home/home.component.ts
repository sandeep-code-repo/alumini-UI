import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../services/config/config.service';
import { RouterModule, Routes, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  adm_emp_excel()
  {
    this.router.navigate(['/Admin_emp_excel'])
  }
  logout()
  {
    
    this.router.navigate(['/login']);
  }
}
