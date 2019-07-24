import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetXdesService {
  getAllXdeUrl = "http://localhost:8080/xde/all/?";
  getSearch = "http://localhost:8080/xde/search/";

  id = 1;
  xdeUrl = "http://localhost:8080/xde/";
  GetXdes(pagenumber: number, pagesize: number) {
    return this.http.get<XdePage>(this.getAllXdeUrl + "pagenumber=" + pagenumber + "&" + "size=" + pagesize);
  }

  getXde(id: number) {
    return this.http.get<Xde>(this.xdeUrl + id);
  }
  searchFunction(qstring:String){
    return this.http.get<Xde[]>(this.getSearch+qstring);
  }


  constructor(private http: HttpClient) {
  }
}
export interface Xde {
  id: number;
  maven: Maven;
  name: String;
}

export interface XdePage {
  content: Xde[];
  totalElements: number;
  totalPages: number;
  number: number;
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
export interface Maven {
  id: number;
  groupId: String;
  artifactId: String;
  version: String;
}
