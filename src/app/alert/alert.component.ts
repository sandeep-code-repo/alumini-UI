import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService} from '../alert.service';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  message: any;

  constructor( public router: Router, 
    private route: Router, 
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.alertService.getMessage().subscribe(message => {
      this.message = message;
  });
  }

}
