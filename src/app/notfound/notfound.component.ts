import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
goHome(){
if(localStorage.isLogin)
	this.router.navigate(['/dashboard']);
				else
	this.router.navigate(['/login']);
				
}
}
