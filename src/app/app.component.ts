import { Component ,OnInit} from '@angular/core';
import {FileUploadServiceService} from './service/file-upload-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'raboApp';
  tableShow:boolean=false;
  successShow:boolean=false;
  uploadFile:any
  responseData:any=[]
  filePathName:any;
  error:any
  constructor(private FileUploadServiceService:FileUploadServiceService){}
  ngOnInit(){
  }
  fileUpload(file:any){
    const target: DataTransfer = <DataTransfer>(file.target);
    this.uploadFile = target.files[0];
    if(file.target.files[0]!=undefined){
      this.filePathName=file.target.files[0].name;
    }
  }
  fileSubmit(){
   this.FileUploadServiceService.uploadFile(this.uploadFile).subscribe((data:any)=>{
	 this.responseData=data.reboResponse;
	 if(this.responseData.length > 0) {
       this.tableShow=true
	 } else {
		 this.successShow = true
	 }
    },
    error => this.error = error
    )
    
  }
}
