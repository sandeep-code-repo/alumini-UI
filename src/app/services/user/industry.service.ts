import { Injectable } from '@angular/core';
import { Industry } from 'src/app/model/industry.model';
@Injectable({
  providedIn: 'root'
})
export class IndustryService {

  constructor() {}
  industrydata: Industry;
  addIndustryData(industry) {
   this.industrydata=industry;
  }
  getIndustryData(){
    return this.industrydata;
  }
}