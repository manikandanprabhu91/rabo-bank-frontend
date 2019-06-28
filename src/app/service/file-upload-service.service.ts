import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import * as config from '../config'
import { Observable } from 'rxjs';


@Injectable()
export class FileUploadServiceService {
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'multipart/from-data'
    })
  };
  
  constructor(private http: HttpClient) {}
   uploadFile(uploadFile:File):Observable<any>{
    let apiUrl=config.serverUrl+"/api/repo/assignment/v1/auth/rebo-file-upload"
    let fileData = new FormData();
    fileData.append('file',uploadFile);
    return this.http.post(apiUrl,fileData)
  }
}
