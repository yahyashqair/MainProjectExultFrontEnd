import { Injectable } from '@angular/core';
import { Maven, Xde } from './get-xdes.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  getAllFeatureUrl="http://localhost:8080/feature/all";
  id=1;
  GetFeatures(){
    return this.http.get<Feature[]>(this.getAllFeatureUrl);
   }
  constructor(private http: HttpClient) {
   }
}

export interface Feature {
  id:number;
  maven:Maven;
  name:String;
  xdeSet:FeatureXde[];
}
export interface FeatureXde {
  id:number;
  xde:Xde;
  typeOfRelation:String;
}
