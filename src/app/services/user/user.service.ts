/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */

import { Injectable, Type } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from "@angular/common/http";
import { getMaxListeners } from 'process';
import { HttpHeaders } from '@angular/common/http';
import {PlantInfoData} from 'src/app/plant-info-data';
import { Login } from 'src/app/login';
@Injectable()
export class UserService {

	constructor(private httpclient:HttpClient) { }

	
	

	baseurl_login:string ="https://cors-anywhere.herokuapp.com/http://117.211.75.160:8086/alumini/login/}";
	baseurl_show_list:string ="https://cors-anywhere.herokuapp.com/http://117.211.75.160:8086/alumini/show/power plant";
	baseurl_insert:string ="https://cors-anywhere.herokuapp.com/http://117.211.75.160:8086/alumini/employees/";

	
	login(login:Login) : Observable<any> {
		
	
  
  
  const headers = { 'content-type': 'application/json'}  
  const body=JSON.stringify(login);
  console.log(body);
  //alert(body);
		
		return this.httpclient.post<any>('https://cors-anywhere.herokuapp.com/http://117.211.75.160:8080/alumini/login/',body,
		{
			'headers':headers
		});
	}

	display(data) : Observable<any> {
		
		const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Methods', 'get')
  .set('Access-Control-Allow-Headers', '*')
  .set('Access-Control-Allow-Credentials', 'true');
  
  

		let params = new HttpParams();
		params = params.append('id:', '1');
		
		
		return this.httpclient.get<any>(this.baseurl_show_list,
		{
			'headers':headers
		}
		);
	}

insert(plant:PlantInfoData): Observable<any>{

	const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(plant);
	console.log(body);
  
  alert(body);
  
  return  this.httpclient.post<any>(this.baseurl_insert,{
	"userName":"hindalco",
    "plantInfo":{
       "plantId":2,
       "password":"ttt",
       "pin":"755007",
       "plantNm":"hindolc",
       "typ":"company",
       "district":"ctc",
       "town":"ctc",
       "street":"badam badi",
       "state":"odisha",
       "email":"aa@gmail.com",
       "web":"hindolc.com",
       "zonal":"ctc",
       "grdId":"12345",
       "timeStamp":"2020-09-22",
       "authPerson":"jayashree",
       "authoPerMob":"7008480987",
       "authPersonDesig":"developer",
       "cpcbUser":"jaya",
       "cpcbUserEmail":"jaya@gmail.com",
       "cpcbUserMob":"998789876",
       "cpcbUsr2":"jatan",
       "cpcbUserEmail2":"jatan@gmail.com",
       "cpcbUserMob2":"87654321",
       "latLong":"34",
       "connected":"456",
       "deptEmail":"jatan123@gmail.com",
       "category":"power plant",
       "plantName":"yyyy",
       "analyzerCount":"123",
       "HQOEmail":"jatan345@gmail.com",
       "inletUrl":"hhtp//jatan@gmail.com",
       "outletUrl":"http//jatan345.il.com",
       "roUser":"jatan678@gmail.com",
       "roUserEmail":"jayashree234@gmail.com",
       "roUserMob":"7865432123",
       "plantSlug":"yyyy",
       "authReq":"hgtyh",
       "stationCount":"678",
       "plantVendor":"hnbjy",
       "caaqmsStation":"76543",
       "cemsStation":"6789876",
       "ceqmsStation":"6754321",
       "secdPersonDesig":"rrrrr",
       "secdPersonMob":"765432134",
       "secdEmail":"jsitam@gmail.com"
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
 

  },{'headers':headers}

	
	);
		
	
	
		
		

}


	
	}

