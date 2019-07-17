import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetXdesService {
  getAllXdeUrl="http://localhost:8080/xde/all";
  id=1;
  GetXdes(){
    return this.http.get<Xde[]>(this.getAllXdeUrl);
   }
  constructor(private http: HttpClient) {
   }
}
export interface Xde {
  id:number;
  maven:Maven;
  name:String;
}
export interface Maven{
  id:number;
  groupId:String;
  artifactId:String;
  version:String;
}
