export interface Industry{
    stationInfo:StationInfo[],
    plantInfo:PlantInfo,
    userinfo:UserInfo,
    
}
export interface StationInfo{
    stationId?:number,
    analyzer?:string,
    analyzerv2?:string,
    location?:string,
    installDt?:string,
    token?:string,
    macNo?:string,
    stationNo?:number,
    stnType?:string,
    hasThresold?:'Y'|'N',
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
    plantId:number,

}
export interface UserInfo{
    userRole:Role[],

}
export interface Role{
    roleid:number
}
export interface ParameterInfo{
    paraId:number,
    sid:number,
    paramter:string,
    analyserMake:string,
    analyserModel:string,
    analyserSerialNo:string,
    devidceIMEINo:number,
    macId:number,
    measurmentMin:number,
    measurmentMax:number,
    unit:string
}