import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Profile} from '../profile.service';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  urlAllServer = 'http://localhost:8080/server/';
  urlReadData = 'http://localhost:8080/server/readData/';
  urlServer = 'http://localhost:8080/server/';
  serverId; // 0 Local else Not Local
  public getServers() {
    return this.http.get<Server[]>(this.urlAllServer);
  }

  public getServer(id: number) {
    return this.http.get<Server>(this.urlServer + id);
  }

  public readData(id: number) {
    return this.http.get(this.urlReadData + id);
  }

  public addServer(data: any) {
    return this.http.post<Server[]>(this.urlServer, data);
  }

  public getCurrentServer() {
    return this.serverId;
  }

  constructor(private http: HttpClient) {
    this.serverId = 1;
  }

  public setCurrentServer(id: number) {
    this.serverId = id;
  }
}

export interface Server {
  id: number;
  username: string;
  ipAddress: string;
  password: string;
  hostName: string;
}
