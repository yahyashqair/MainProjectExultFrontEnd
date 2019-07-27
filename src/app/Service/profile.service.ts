import { Injectable } from '@angular/core';
import { Maven } from './get-xdes.service';
import { Feature } from './feature.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  urlProfile = 'http://localhost:8080/profile/';
  urlParent = 'http://localhost:8080/profile/parents/';

  urlAllProfile = 'http://localhost:8080/profile/all';
  urlRelatios = 'http://localhost:8080/profile/relations/';
  urlSearch = 'http://localhost:8080/profile/search/';

  GetProfiles() {
    return this.http.get<Profile[]>(this.urlAllProfile);
  }
  getProfile(id: number) {
    return this.http.get<Profile>(this.urlProfile + id);
  }
  GetRelations() {
    return this.http.get<ProfileRelation[]>(this.urlRelatios);
  }
  getAllProfileUrl = 'http://localhost:8080/profile/all/?';
  getProfileWithPagination(pagenumber: number, pagesize: number) {
    return this.http.get<ProfilePage>(this.getAllProfileUrl + 'pagenumber=' + pagenumber + '&' + 'size=' + pagesize);
  }
  searchFunction(qstring: String) {
    return this.http.get<Profile[]>(this.urlSearch + qstring);
  }

  getParents(id: number) {
    return this.http.get<Profile[]>(this.urlParent + id);
  }
  constructor(private http: HttpClient) {
  }
}

export interface ProfilePage {
  content: Profile[];
  totalElements: number;
  totalPages: number;
  number: number;
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
