import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
@Injectable()

export class IndustryDropDown {
    industryCategory: any;
  industryList: any;
  constructor(private http: HttpClient) {}
 
  private getCategoryURL: string = 'http://117.211.75.160:8086
/rest/api/industry/dropdownIndustryList'
  private getIndustryByCategoryURL: string ='http://117.211.75.160:8086
/rest/api/getAllPlants/?category='
  getIndustryCategory(){
    return this.http.get(this.getCategoryURL).map(data => {
      
        this.industryCategory= data;
        return this.industryCategory;
    })
   
  }
  getIndustryByCategory(category:string){
    
    return this.http.get(this.getIndustryByCategoryURL+category).map(data => {
      
       this.industryList= data;
       return this.industryList;
   })
  }
}