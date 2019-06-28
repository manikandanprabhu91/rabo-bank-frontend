
//export const serverUrl="http://localhost:9080/api/repo/assignment/v1/auth/csv-file-upload";

'use strict'
var hostName = location.hostname;
var protocol = location.protocol;

if(hostName == "localhost"){
    hostName = "localhost:8090";
    protocol = "http:";

}
export const serverUrl = protocol+"//"+hostName;


