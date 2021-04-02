import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Industry } from 'src/app/model/industry.model';
@Injectable({
  providedIn: 'root'
})
export class IndustryService {

  constructor(private httpclient: HttpClient) {}
  industrydata: Industry;
  headers = { 'content-type': 'application/json' }
  addIndustryData(industry) {
   this.industrydata=industry;
  }
  getIndustryData(userName:string): Observable<any>{
    return this.httpclient.post<any>('http://117.211.75.160:8086
/rest/api/getPlantDetails/', {
         'userName': userName

      },
         {
            'headers': this.headers
         });
    
  }
}