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
import {PlantInfoData} from 'src/app/plant-info-data';
import { Login } from 'src/app/login';
import { Subject } from 'rxjs';
import { Data } from '@angular/router';
@Injectable()
export class UserService {


   private subject = new Subject<any>();
   
	constructor(private httpclient:HttpClient) { }

	
   
   confirm(message: string,siFn:()=>void,noFn:()=>void){
      this.setConfirmation(message,siFn,noFn);
    }
    setConfirmation(message: string,siFn:()=>void,noFn:()=>void) {
      let that = this;
      this.subject.next({ type: "confirm",
                  text: message,
                  siFn:
                  function(){
                      that.subject.next(); //this will close the modal
                      siFn();
                  },
                  noFn:function(){
                      that.subject.next();
                      noFn();
                  }
               });

           }

          

           getMessage(): Observable<any> {
            return this.subject.asObservable();
         }
	baseurl_login:string ="https://cors-anywhere.herokuapp.com/http://117.211.75.160:8080/alumini/login/}";
	baseurl_show_list:string ="https://cors-anywhere.herokuapp.com/http://117.211.75.160:8086/rest/api/industry/";
	baseurl_insert:string ="https://cors-anywhere.herokuapp.com/http://117.211.75.160:8086/rest/api/register";
   baseurl_password:string ="https://cors-anywhere.herokuapp.com/http://117.211.75.160:8086/rest/api/savePassword/";
   baseurl_send_query:string="https://cors-anywhere.herokuapp.com/http://117.211.75.160:8086/rest/api/addFeedbackDetails";

   //send query
   baseurl_register:string="https://cors-anywhere.herokuapp.com/http://117.211.75.160:8086/rest/api/register"
	registrationService(industry:Industry):Observable<any>{
      const headers = { 'content-type': 'application/json'}  
      const body=JSON.stringify(industry);
     
      return this.httpclient.post<any>(this.baseurl_register, body,{
			'headers':headers
		});
    
    
     
   }


//************help page************

   send_query(sendquery:Data):Observable<any> {
      const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Methods', 'post')
  .set('Access-Control-Allow-Headers', '*')
  .set('Access-Control-Allow-Credentials', 'true');

      const body=JSON.stringify(sendquery);
      console.log(body);
    // alert(body);
          
    return this.httpclient.post<any>(this.baseurl_send_query,{
      "feedbackStatus":"true",
"query":sendquery.query,
"comment":"No comments",
"mobNo":sendquery.contactno,
"userName":sendquery.username,
"email":sendquery.email
      },
		{
			'headers':headers
		}
      );
      

   }

   //Forget Password Api

   Forget(password:Data) : Observable<any> {
   
     
      const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Methods', 'post')
  .set('Access-Control-Allow-Headers', '*')
  .set('Access-Control-Allow-Credentials', 'true');

      const body=JSON.stringify(password);
      console.log(body);
     // alert(body);
          
    return this.httpclient.post<any>(this.baseurl_password,{
       email:password.email,
       tempPassword:password.password
      },
		{
			'headers':headers
		}
      );
      
       }



   // for LOgin Api    
	
	login(login:Login) : Observable<any> {
		
	
  
  
  const headers = { 'content-type': 'application/json'}  
  const body=JSON.stringify(login);
  console.log(body);
  //alert(body);
		
		return this.httpclient.post<any>('https://cors-anywhere.herokuapp.com/http://117.211.75.160:8086/rest/api/login/',{
         userName:login.username,
         password:login.password
      },
		{
			'headers':headers
		});
   }
   
//realtime-report

realtimereport() : Observable<any> {	
  
   const headers = { 'content-type': 'application/json'}  
  // const body=JSON.stringify(homepage);
  // console.log(body);
  // alert(body); getPlantDetails/username
       
       return this.httpclient.post<any>('https://cors-anywhere.herokuapp.com/http://117.211.75.160:8086/rest/api/getPlantDetails/',{
         'userName':'Hari'
         
       },
       {
          'headers':headers
       });
    }

//realtime report parameter binding
realtimereport_monitoring_type(id) : Observable<any> {	
  
  // const headers = { 'content-type': 'application/json'}  
  // const body=JSON.stringify(homepage);
  // console.log(body);
  // alert(body); getPlantDetails/username
       
       return this.httpclient.get<any>('https://cors-anywhere.herokuapp.com/http://117.211.75.160:8086/rest/api/getPrameterFromStation?plantId=hindalco_lpng&stnType='+id);
      
      
      
    }

////////// homepage /////////////////
   homepage() : Observable<any> {	
  
      const headers = { 'content-type': 'application/json'}  
     // const body=JSON.stringify(homepage);
     // console.log(body);
     // alert(body);
          
          return this.httpclient.post<any>('https://cors-anywhere.herokuapp.com/http://117.211.75.160:8086/rest/api/getRealPollutantLevelInfos/',{
            'plantId':'hindalco_lpng'
            
          },
          {
             'headers':headers
          });
       }


       dashboardpage() : Observable<any> {	
  
         const headers = { 'content-type': 'application/json'}  
        // const body=JSON.stringify(homepage);
        // console.log(body);
        // alert(body);
             
             return this.httpclient.post<any>('https://cors-anywhere.herokuapp.com/http://117.211.75.160:8086/rest/api/getRealPollutantLevelInfos/',{
               'plantId':'hindalco_lpng'
               
             },
             {
                'headers':headers
             });
          }


       home_page_graph_bind() : Observable<any> {	
  
         const headers = { 'content-type': 'application/json'}  
        // const body=JSON.stringify(homepage);
        // console.log(body);
        // alert(body);
             
             return this.httpclient.post<any>('https://cors-anywhere.herokuapp.com/http://117.211.75.160:8086/rest/api/getRealPollutantLevelGraphData',{
               "plantId":"hindalco_lpng",
	"parameterCode":"NO2",
	"recordedTime":"2020-11-14 03:46:00"
               
             },
             {
                'headers':headers
             });
          }
   

   // for LOgin Api    
	
	upload_excel(export_excel:Login) : Observable<any> {
		
	
  
  
      const headers = { 'content-type': 'application/json'}  
      const body=JSON.stringify(export_excel);
      console.log(body);
      //alert(body);
          
          return this.httpclient.post<any>('https://cors-anywhere.herokuapp.com/http://117.211.75.160:8086/rest/api/saveExcelRegistration/',{},
          {
             'headers':headers
          });
       }
       


   //*******     DATA BIND  INDUSTRY CATEGORY  SHOW ******** */

	display(name) : Observable<any> {
		
		const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Methods', 'get')
  .set('Access-Control-Allow-Headers', '*')
  .set('Access-Control-Allow-Credentials', 'true');
  
  

    

      
		return this.httpclient.get<any>(this.baseurl_show_list+"/"+name,
		{
			'headers':headers
		}
      );
   
   }
   

  






   // register insert
insert(plant:PlantInfoData): Observable<any>{

   const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Methods', 'post')
  .set('Access-Control-Allow-Headers', '*')
  .set('Access-Control-Allow-Credentials', 'true');

    const body=JSON.stringify(plant);
	console.log(body);
  
 // alert(body);
  
  return  this.httpclient.post<any>(this.baseurl_insert,{
	
    "plantInfo":{
      "pid": 4,
      "pin": plant.ind_gen_address_Pincode,
      "typ": plant.ind_gen_name,
      "plantUserName":plant.ind_gen_existing_part_id,
      "district":plant.ind_gen_address_District,
      "town": plant.ind_gen_address_Town,
      "street": plant.ind_gen_address,
      "state": plant.ind_gen_address_State,
      "email": "demo123@123",
      "web": "demoplant.com",
      "zonal": "Assam",
      "grdId": "12345",
      "timeStamp": "2020-09-22T00:00:00.000+0000",    
        
      "authPerson": plant.ind_gen_prim_cont_pername,
      "authoPerMob": plant.ind_gen_prim_phone,
      "authPersonDesig": plant.ind_gen_prim_design,

      "cpcbUser": "jaya",
      "cpcbUserEmail": "demo@123",
      "cpcbUserMob": "998789876",

      "cpcbUsr2": "demo",
      "cpcbUserEmail2": "demo123@gmail.com",
      "cpcbUserMob2": "87654321",

      "latLong": "34",
      "connected": "456",
      "deptEmail": plant.ind_gen_prim_email,
      "category": plant.ind_gen_ddlcategory,
      "plantName": "gggg",
      "analyzerCount": "123",
      "inletUrl": "http//demo@gmail.com",
      "outletUrl": "http//demo123.il.com",
      "roUser": "demo123@gmail.com",
      "roUserEmail": "demo123@gmail.com",
      "roUserMob": "7865432123",
      "plantSlug": "yyyy",
      "authReq": "hgtyh",
      "stationCount": "678",
      "plantVendor": plant.ind_gen_vender,
      "caaqmsStation": "76543",
      "cemsStation": "6789876",
      "ceqmsStation": "6754321",

      "secdPerson": plant.ind_gen_security_cont_person_name,
      "secdPersonDesig": plant.ind_gen_security_cont_degn,
      "secdPersonMob": plant.ind_gen_security_cont_phone,
      "secdEmail": plant.ind_gen_security_cont_email,


      "createdBy": null,
      "lastModifiedBy": null,
      "lastModifiedDt": null,
      "hqoemail": "demo123@gmail.com"

    },
    "userInfo": {     
      "password": plant.ind_gen_password,
      "email": plant.ind_gen_prim_email,
      "mobNo": plant.ind_gen_prim_phone,
      "department": "dept",
      "userType": "Guwahati",
      "plantType": "MK Street",
      "category": plant.ind_gen_ddlcategory,
      "designation": plant.ind_gen_prim_design,
      "reportto": "demoplant.com",
       "rsaPublicKey": null,
      "rsaPrivateKey": null,
      "createdBy": null,
      "createdDt": null,
      "lastModifiedBy": null,
      "lastModifiedDt": null,
      "userRole": [
          {
              "roleId":3
          },
          {
             "roleId":1
          }
      ]   
  },
    "stationInfo":{
       "stationId":2,
       "analyzer":"ffffff",
       "analyzerv2":"gggggg",
       "location":"bbbsr",
       "installDt":"2020-09-02",
       "token":"ddffgdhtgsaerre",
       "macNo":"ytggvdctrf",
       "stationNo":"45678765",
       "stnType":"dfrgth",
       "hasThresold":"23456",
       "stationVendor":"cccccc",
       "latitude":"45",
       "longitute":"87",
       "measurementPrinciple":"fgdhgh",
       "stackHeight":"yujhgfd",
       "stackDiameter":"rfgttt",
       "stackVelocity":"tgrrgfrdgv",
       "gasDischargeRate":"rrr",
       "remarks":"wwwwwwwwwwww",
       "parameterInfo":[
          {
             "paramter":"er4eftggg",
             "analyserMake":"fff",
             "analyserModel":"vvvv",
             "analyserSerialNo":"gggg",
             "devidceIMEINo":"hhhh",
             "macId":"yyyyy",
             "measurmentRange":"iiii",
             "Unit":"iiii"
          },
          {
             "paramter":"ppppppppppppppp",
             "analyserMake":"ffedrf",
             "analyserModel":"vvvffddv",
             "analyserSerialNo":"ggsssgg",
             "devidceIMEINo":"hhssahh",
             "macId":"yyyaassyy",
             "measurmentRange":"iissddii",
             "Unit":"erf"
          }
       ]
    }
 

  }
  ,{'headers':headers}

	
	);
		
	
	
		
		

}


	
	}

