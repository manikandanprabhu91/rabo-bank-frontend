'use strict'
var hostName = location.hostname;
var protocol = location.protocol;

if(hostName == "localhost"){
    hostName = "localhost:8090";
    protocol = "http:";

}
export const serverUrl = protocol+"//"+hostName;


