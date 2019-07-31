import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpEventType} from '@angular/common/http';
import {FileUploader} from 'ng2-file-upload';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(private http: HttpClient) { }
  url:string="http://localhost:8080/loader/zip";

  title = 'ng8fileupload';
  public uploader: FileUploader = new FileUploader({ url: this.url, itemAlias: 'file' });
  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('FileUpload:uploaded:', item, status, response);
      alert('File uploaded successfully');
    };
  }
}
