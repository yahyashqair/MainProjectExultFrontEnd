import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetXdesService {
  getAllXdeUrl="http://localhost:8080/xde/all/?";
  id=1;
  GetXdes(pagenumber :number , pagesize : number){
    return this.http.get<XdePage>(this.getAllXdeUrl+"pagenumber="+pagenumber+"&"+"size="+pagesize);
   }
  constructor(private http: HttpClient) {
   }
}
export interface Xde {
  id:number;
  maven:Maven;
  name:String;
}

export interface XdePage {
  content:Xde[];
  totalElements:number;
  totalPages:number;
  number:number;
}
/*
    "totalElements": 725,
    "last": false,
    "totalPages": 73,
    "number": 1,
    "size": 10,
    "sort": {
        "sorted": false,
        "unsorted": true,
        "empty": true
    },
    "numberOfElements": 10,
    "first": false,
    "empty": false
*/ 
export interface Maven{
  id:number;
  groupId:String;
  artifactId:String;
  version:String;
}
