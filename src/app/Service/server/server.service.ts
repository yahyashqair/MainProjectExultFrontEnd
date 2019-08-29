import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Profile} from '../profile.service';
import {Observable, Subject} from 'rxjs';
import {text} from '@angular/core/src/render3/instructions';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  urlAllServer = 'http://localhost:8080/server/';
  urlReadData = 'http://localhost:8080/server/readData/';
  urlServer = 'http://localhost:8080/server/';
  serverId: number; // 0 Local else Not Local
  private subject = new Subject<any>();
  // for value ip :

  public getServers() {
    return this.http.get<Server[]>(this.urlAllServer);
  }

  public getServer(id: number) {
    return this.http.get<Server>(this.urlServer + id);
  }

  public deleteServer(id: number) {
    return this.http.delete<Server>(this.urlServer + id);
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

  public getCurrentServerUpdated(): Observable<Server> {
    return this.subject.asObservable();
  }


  constructor(private http: HttpClient) {
    this.setCurrentServer(1);
  }

  public setCurrentServer(id: number) {
    this.serverId = id;
    let x;
    this.getServer(this.serverId).subscribe(data => {
      x = data;
      this.subject.next(x);
      console.log(x);
    });
  }
}

export interface Server {
  id: number;
  username: string;
  ipAddress: string;
  password: string;
  hostName: string;
}
