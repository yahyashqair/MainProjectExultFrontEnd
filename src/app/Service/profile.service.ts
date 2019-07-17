import { Injectable } from '@angular/core';
import { Maven } from './get-xdes.service';
import { Feature } from './feature.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  urlAllProfile="http://localhost:8080/Profile/all/";
  urlRelatios="http://localhost:8080/Profile/relations/";
  GetProfiles(){
    return this.http.get<Profile[]>(this.urlAllProfile);
   }
   GetRelations(){
    return this.http.get<ProfileRelation[]>(this.urlRelatios);
   }
  constructor(private http: HttpClient) {
   }
}

export interface Profile {
  id:number;
  maven:Maven;
  name:String;
  features:Feature[];
}
export interface ProfileRelation{
  parent:number;
  child:number;
}
