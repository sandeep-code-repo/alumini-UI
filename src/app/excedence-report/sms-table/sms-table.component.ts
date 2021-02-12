import { Component, Input, OnInit } from '@angular/core';
import { ITabledata } from 'src/app/model/tableData';

@Component({
  selector: 'app-sms-table',
  templateUrl: './sms-table.component.html',
  styleUrls: ['./sms-table.component.scss']
})
export class SmsTableComponent implements OnInit {

  constructor() { }
  @Input() tableData:ITabledata[];
  headers = ['SL.No', 'Category', 'Industry Code', 'Industry Name', 'Full Address', 'Contact in which SMSAlerts generated', 'State', 'Station Name', "Parameter Standard limit's", 'Parameter', 'Excedence', 'Total SMS', 'In Ganga Basin'];
  ngOnInit(): void {
   
  }

}
