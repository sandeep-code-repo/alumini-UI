import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-updateworkflow',
  templateUrl: './updateworkflow.component.html',
  styleUrls: ['./updateworkflow.component.scss'],
  providers:[DatePipe]
})
export class UpdateworkflowComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goback() {
    this.router.navigateByUrl("/workflow");
  }

}
