export interface Industry{
    stationInfo:StationInfo[],
    plantInfo:PlantInfo,
    userInfo:UserInfo,
    regstatus?:string
}
export interface StationInfo{
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
    parameterInfo?:ParameterInfo[]
}
export interface PlantInfo{
    plantVendor?:string
    plantUserName:string,
    category:string,
    plantName:string,
    pin:number,
    typ:string,
    district:string,
    town:string,
    street:string,
    state:string,
    email:string,
    roUser:string,
    caaqmsStation:number,
    cemsStation:number,
    ceqmsStation:number,
    authPerson:string,
    authoPerMob:string,
    authPersonDesig:string,
    secdPerson: string,
 secdPersonDesig: string,
secdPersonMob:string,
secdEmail: string
}
export interface UserInfo{
    userRole:Role[],
    password:string,
    mobNo: number,
    department: string,
    userType?: string,
    plantType?: string,
    category?: string,
    designation: string,
    reportto?: string,   
}
export interface Role{
    roleid:string
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
    unit:string
}