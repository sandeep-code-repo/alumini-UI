
import { Industry } from '../../model/industry.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Login } from 'src/app/login';
import { Subject } from 'rxjs';
import { Data } from '@angular/router';
import { FilterChart } from '../../model/filterchart.model';
import {ISitestatus} from '../../model/siteStatus'
@Injectable()
export class UserService {

   
   private baseURL: string = "http://117.211.75.160:8086/rest/api";
   loginurl: string = this.baseURL+"/login/";
   smsReporturl=this.baseURL+"/getSMSReport"
   smsReportexcelDownload=this.baseURL+"/getSMSReport/download"
   getIndustryUrl: string = this.baseURL+"/industry/";
   registrationUrl: string = this.baseURL+"/register";
   updateUserUrl: string = this.baseURL+"/updateUser";
   liveStatusUrl:string = this.baseURL+"/getAllLiveStatus"
   passwordResetUrl: string = this.baseURL+"/savePassword";
   helpUrl: string = this.baseURL+"/addFeedbackDetails";
   plantDetailsUrl:string=this.baseURL+"/getPlantDetails"
   getParameterByStationUrl:string=this.baseURL+"/getPrameterFromStation"
   getWorkflowDetailsUrl:string=this.baseURL+"/getWorkflowDetails";
   
   public userData:any;
   private subject = new Subject<any>();
   responseData: any;
   httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Access-Control-Allow-Origin':'*',})
    };
   constructor(private httpclient: HttpClient) { 
   }



   confirm(message: string, siFn: () => void, noFn: () => void) {
      this.setConfirmation(message, siFn, noFn);
   }
   setConfirmation(message: string, siFn: () => void, noFn: () => void) {
      let that = this;
      this.subject.next({
         type: "confirm",
         text: message,
         siFn:
            function () {
               that.subject.next(); //this will close the modal
               siFn();
            },
         noFn: function () {
            that.subject.next();
            noFn();
         }
      });

   }



   getMessage(): Observable<any> {
      return this.subject.asObservable();
   }
  
   
   gettableData(filterData:FilterChart): Observable<any>{
      return this.httpclient.post<any>(this.smsReporturl,filterData)
   }
   getExcelReportSMS(filterData:FilterChart): Observable<any>{
      return this.httpclient.get(this.smsReportexcelDownload+'?plantId='+filterData.plantId+'&stationId='+filterData.stationId+'&parameter='+filterData.parameter+'&from='+filterData.fromDate+'&to='+filterData.toDate,{ responseType: 'blob'})
     
   }
   //*************Registration Service**************//
  
   registrationService(industry: Industry): Observable<any> {
      const headers = { 'content-type': 'application/json' }
      const body = JSON.stringify(industry);

      return this.httpclient.post<any>(this.registrationUrl, body, {
         'headers': headers
      });

   }
updatePlantService(industry: Industry):Observable<any> {
   const headers = new HttpHeaders()
         .set('content-type', 'application/json')
         .set('Access-Control-Allow-Origin', '*')
         .set('Access-Control-Allow-Methods', 'put')
         .set('Access-Control-Allow-Headers', '*')
         .set('Access-Control-Allow-Credentials', 'true');
   
   //const headers = { 'content-type': 'application/json' }
   const body = JSON.stringify(industry);

   return this.httpclient.put<any>(this.updateUserUrl, body, this.httpOptions
      );

}
   

   //************help page************

   send_query(sendquery: Data): Observable<any> {
      const headers = new HttpHeaders()
         .set('content-type', 'application/json')
         .set('Access-Control-Allow-Origin', '*')
         .set('Access-Control-Allow-Methods', 'post')
         .set('Access-Control-Allow-Headers', '*')
         .set('Access-Control-Allow-Credentials', 'true');

      

      return this.httpclient.post<any>(this.helpUrl, {
         "feedbackStatus": "true",
         "query": sendquery.query,
         "comment": "No comments",
         "mobNo": sendquery.contactno,
         "userName": sendquery.username,
         "email": sendquery.email
      },
         {
            'headers': headers
         }
      );


   }

   //*************Forget Password Service***************//

   forgotPasswordService(password: Data): Observable<any> {


      const headers = new HttpHeaders()



         .set('content-type', 'application/json')
         .set('Access-Control-Allow-Origin', '*')
         .set('Access-Control-Allow-Methods', 'post')
         .set('Access-Control-Allow-Headers', '*')
         .set('Access-Control-Allow-Credentials', 'true');

     
      

      return this.httpclient.post<any>(this.passwordResetUrl, {
         email: password.email,
         tempPassword: password.password
      },
         {
            'headers': headers
         }
      );

   }



   // for Login Api    

   login(login: Login): Observable<any> {

      const headers = { 'content-type': 'application/json' }
      
      return this.httpclient.post<any>(this.loginurl, login,
         {
            'headers': headers
         });
   }

   //realtime-report

   realtimereport(userName): Observable<any> 
   {

      const headers = { 'content-type': 'application/json' }
      

      return this.httpclient.post<any>(this.plantDetailsUrl,{
         'userName': userName

      },
         {
            'headers': headers
         });
   }

   //realtime report parameter binding
   realtimereport_monitoring_type(id: string,plantId: string): Observable<any> {

      return this.httpclient.get<any>(this.getParameterByStationUrl+'?plantId='+plantId+'&stnType='+ id);

   }

   ////////// homepage /////////////////
   homepage(plantId: string): Observable<any> {

      const headers = { 'content-type': 'application/json' }
      

      return this.httpclient.post<any>(this.baseURL+'/getRealPollutantLevelInfos/', {
         'plantId': plantId

      },
         {
            'headers': headers
         });
   }

   public getRealPollutantStationInfos(param: any): Observable<any> {
    
      return this.httpclient.post<any>(this.baseURL + '/getRealPollutantStationParamLevelInfos/', param);

   }
   public getTrendsGraphdata(filter:FilterChart): Observable<any> {
      
      return this.httpclient.post<any>(this.baseURL + '/getRealPoulltantStationDateLevelGraphData/',filter )
  ;

   }
   dashboardpage(): Observable<any> {

      const headers = { 'content-type': 'application/json' }
     

      return this.httpclient.post<any>(this.baseURL +'/getRealPollutantLevelInfos/', {
         'plantId': 'hindalco_lpng'

      },
         {
            'headers': headers
         });
   }


   home_page_graph_bind(plantId:string): Observable<any> {

      const headers = { 'content-type': 'application/json' }
      

      return this.httpclient.post<any>(this.baseURL +'/getRealPollutantLevelGraphData', {
         "plantId": plantId,
         "parameterCode": "NO2",
         "recordedTime": "2020-11-14 03:46:00"

      },
         {
            'headers': headers
         });
   }


   //*****Admin Excel Upload Sevice  **** */ 

   upload_excel(): Observable<any> {




      const headers = { 'content-type': 'application/json' }


      return this.httpclient.post<any>(this.baseURL +'/saveExcelRegistration/', {},
         {
            'headers': headers
         });
   }



   //*******     DATA BIND  INDUSTRY CATEGORY  SHOW ******** */

   display(name: string): Observable<any> {

      const headers = new HttpHeaders()
         .set('content-type', 'application/json')
         .set('Access-Control-Allow-Origin', '*')
         .set('Access-Control-Allow-Methods', 'get')
         .set('Access-Control-Allow-Headers', '*')
         .set('Access-Control-Allow-Credentials', 'true');






      return this.httpclient.get<any>(this.getIndustryUrl + "/" + name,
         {
            'headers': headers
         }
      );

   }
   getsiteStatus(plantId:string,siteStatus:string,exceedanceStatus:string){
      return this.httpclient.get<any>(this.liveStatusUrl+'?plantId='+plantId+'&plantStatus='+ siteStatus+'&exceedanceStatus='+ exceedanceStatus)
   }
   //for workflow api
   workflowpage():Observable<any>{
      const headers={'content-type':'application/json'}

      return this.httpclient.post<any>(this.baseURL + '/getWorkflowDetails/',{

      },
         {
            'headers':headers
         })
   }

}

