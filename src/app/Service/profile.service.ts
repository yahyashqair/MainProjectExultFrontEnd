import { Injectable } from '@angular/core';
import { Maven } from './get-xdes.service';
import { Feature } from './feature.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  urlProfile = "http://localhost:8080/profile/";
  urlAllProfile = "http://localhost:8080/profile/all/";
  urlRelatios = "http://localhost:8080/profile/relations/";
  GetProfiles() {
    return this.http.get<Profile[]>(this.urlAllProfile);
  }
  getProfile(id: number) {
    return this.http.get<Profile>(this.urlProfile + id);
  }
  GetRelations() {
    return this.http.get<ProfileRelation[]>(this.urlRelatios);
  }
  constructor(private http: HttpClient) {
  }
}

export interface Profile {
  id: number;
  maven: Maven;
  name: String;
  features: Feature[];
  configurations: Configration[];
}
export interface Configration {
  id: number;
  name: String;
  value: String;
}

export interface ProfileRelation {
  parent: number;
  child: number;
}
