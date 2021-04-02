import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { WorkflowModel } from '../model/workflow.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addworkflow',
  templateUrl: './addworkflow.component.html',
  styleUrls: ['./addworkflow.component.scss'],
  providers:[DatePipe]
})
export class AddworkflowComponent implements OnInit {
  model=new WorkflowModel("","","","",new Date(),new Date());


  constructor(private router: Router, public datepipe: DatePipe) { }

  ngOnInit(): void {
    
  }
  goback() {
    this.router.navigateByUrl("/workflow");
  }
}
