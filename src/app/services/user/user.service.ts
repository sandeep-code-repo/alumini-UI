/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
import { Industry } from 'src/app/model/industry.model';
import { Injectable, Type } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from "@angular/common/http";
import { getMaxListeners } from 'process';
import { HttpHeaders } from '@angular/common/http';
import { PlantInfoData } from 'src/app/plant-info-data';
import { Login } from 'src/app/login';
import { Subject } from 'rxjs';
import { Data } from '@angular/router';
@Injectable()
export class UserService {


   private subject = new Subject<any>();

   constructor(private httpclient: HttpClient) { }



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
   baseurl_login: string = "https://cors-anywhere.herokuapp.com/http://117.211.75.160:8080/alumini/login/}";
   baseurl_show_list: string = "https://cors-anywhere.herokuapp.com/http://117.211.75.160:8086/rest/api/industry/";
   baseurl_insert: string = "https://cors-anywhere.herokuapp.com/http://117.211.75.160:8086/rest/api/register";
   baseurl_password: string = "https://cors-anywhere.herokuapp.com/http://117.211.75.160:8086/rest/api/savePassword/";
   baseurl_send_query: string = "https://cors-anywhere.herokuapp.com/http://117.211.75.160:8086/rest/api/addFeedbackDetails";

   //send query
   baseurl_register: string = "https://cors-anywhere.herokuapp.com/http://117.211.75.160:8086/rest/api/register"
   registrationService(industry: Industry): Observable<any> {
      const headers = { 'content-type': 'application/json' }
      const body = JSON.stringify(industry);

      return this.httpclient.post<any>(this.baseurl_register, body, {
         'headers': headers
      });



   }


   //************help page************

   send_query(sendquery: Data): Observable<any> {
      const headers = new HttpHeaders()
         .set('content-type', 'application/json')
         .set('Access-Control-Allow-Origin', '*')
         .set('Access-Control-Allow-Methods', 'post')
         .set('Access-Control-Allow-Headers', '*')
         .set('Access-Control-Allow-Credentials', 'true');

      const body = JSON.stringify(sendquery);
      console.log(body);
      // alert(body);

      return this.httpclient.post<any>(this.baseurl_send_query, {
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

   //Forget Password Api

   Forget(password: Data): Observable<any> {


      const headers = new HttpHeaders()
         .set('content-type', 'application/json')
         .set('Access-Control-Allow-Origin', '*')
         .set('Access-Control-Allow-Methods', 'post')
         .set('Access-Control-Allow-Headers', '*')
         .set('Access-Control-Allow-Credentials', 'true');

      const body = JSON.stringify(password);
      console.log(body);
      // alert(body);

      return this.httpclient.post<any>(this.baseurl_password, {
         email: password.email,
         tempPassword: password.password
      },
         {
            'headers': headers
         }
      );

   }



   // for LOgin Api    

   login(login: Login): Observable<any> {




      const headers = { 'content-type': 'application/json' }
      const body = JSON.stringify(login);
      console.log(body);
      //alert(body);

      return this.httpclient.post<any>('https://cors-anywhere.herokuapp.com/http://117.211.75.160:8086/rest/api/login', {
         userName: login.username,
         password: login.password
      },
         {
            'headers': headers
         });
   }


   // for LOgin Api    

   upload_excel(export_excel: Login): Observable<any> {




      const headers = { 'content-type': 'application/json' }
      const body = JSON.stringify(export_excel);
      console.log(body);
      //alert(body);

      return this.httpclient.post<any>('https://cors-anywhere.herokuapp.com/http://117.211.75.160:8086/rest/api/saveExcelRegistration/', {},
         {
            'headers': headers
         });
   }



   //*******     DATA BIND  INDUSTRY CATEGORY  SHOW ******** */

   display(name): Observable<any> {

      const headers = new HttpHeaders()
         .set('content-type', 'application/json')
         .set('Access-Control-Allow-Origin', '*')
         .set('Access-Control-Allow-Methods', 'get')
         .set('Access-Control-Allow-Headers', '*')
         .set('Access-Control-Allow-Credentials', 'true');






      return this.httpclient.get<any>(this.baseurl_show_list + "/" + name,
         {
            'headers': headers
         }
      );

   }



}

