
export interface Industry{
    stationInfoMapper?:StationInfoMapper[],
    userInfoMapper:UserInfoMapper,
    plantInfo:PlantInfo,
    regstatus?:string
}
export interface UserInfoMapper{
    userInfo:UserInfo,
    userRole?:Role[],
}
export interface StationInfoMapper{
    stationInfo:StationInfo,
    parameterInfo?:ParameterInfo[]
}
export interface StationInfo{
  uuid?: any;
    //stationInfoID?:string,
    stationId?:string,
    analyzer?:string,
    analyzerv2?:string,
    location?:string,
    installDt?:string,
    token?:string,
    macNo?:string,
    stationNo?:number,
    stnType?:string,
    hasThresold?:string,
    stationVendor?:string,
     latitude?:string,
     longitute?:string,
     measurementPrinciple?:string,
     stackHeight?:number,
    stackDiameter?:number,
    stackVelocity?:string,
    gasDischargeRate?:number,
    remarks?:string,
   
}
export interface PlantInfo{
    plantName:string,
    plantVendor?:string,
    plantType?:string,
    category:string,
    roUser:string,
    caaqmsStation:number,
    cemsStation:number,
    ceqmsStation:number,
    
}
export interface UserInfo{
    userName:string,
    email:string,
   // mobNo:string,
    pin:number,
    district:string ,
    town:string ,
    street: string,
   state: string,                      
   authPerson: string,
   authPersonDesig: string,
    secdPerson?: string,
    secdPersonDesig: string,
    secdPersonMob:string ,
    secdEmail:string ,
    password:string,
    mobNo: number,
    department: string,
    regStatus?:Boolean
    //userType?: string,
    //plantType?: string,
    //category?: string,
    //designation: string,
    //reportto?: string,   
}
export interface Role{
    roleId?:number
}
export interface ParameterInfo{
   
   
    paramter:string,
    analyserMake:string,
    analyserModel:string,
    analyserSerialNo:string,
    devidceIMEINo:string,
    macId:string,
    measurmentMin:string,
    measurmentMax:string,
    unit:string,
    certification:string
}

//Added by Jitendra

export interface PolutionStationInfo {
    plantName?: string;
    industryCategory?: string;
    city?: string;
    district?: string;
    state?: string;
    countStation?: number;
    countParameter?: number,
    realTimeStationParamMapper: ParamMapper;
    listStationName:string[];
}

export interface ParamMapper {
    emissionList: ListData[];
    effluentList: ListData[];
    ambientList: ListData[];
    emissionListSize?: number;
    effluentListSize?: number;
    ambientListSize?: number;
}

export interface ListData {
    parameter?: string,
    unit?: string,
    limit?: string,
    range?: string,
    recordedTime?: string,
    recordedLevel?: string,
    thresholdLevel?: string,
    aggregation?: string,
    stationName?: string,
    analyzer?: string,
    parameterStatus: boolean;
}

