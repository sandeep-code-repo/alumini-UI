import { FilterChart } from "./filterchart.model";

export interface ITabledata{
  "id": number;
  "industryCategory": string;
  "industryCode": string;
  "industryName":string;
  "address":string;
  "smsContactNo": number;
  "state": string;
  "stationName": string;
  "paramLimit": number;
  "parameter": string;
  "exceedence": number;
  "totalSMS": number;
  "inGangaBasinStatus": string;
  "createdBy":string;
"createdDt":number;
"lastModifiedBy":string;
"lastModifiedDt":string;
"filter":FilterChart
}