import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServerService} from '../server/server.service';
import {Profile} from '../profile.service';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  urlTemplate = 'http://localhost:8080/template/';

  public GetDevices() {
  return this.http.get<DeviceTemplate[]>(this.urlTemplate);
}

public getDevice(id: number) {
  return this.http.get<DeviceTemplate>(this.urlTemplate + id);
}

public addDevice(data: any) {
  return this.http.post<DeviceTemplate[]>(this.urlTemplate, data);
}

constructor(private http: HttpClient) {
}
}

export interface DeviceTemplate {
  id: number;
  CLI_ADDRESS: string;
  CLI_LOGIN_USERNAME: string;
  CLI_LOGIN_PASSWORD: string;
  CLI_PORT: string;
  CLI_TRANSPORT: string;
  CLI_ENABLE_PASSWORD: string;
  SNMP_READ_CS: string;
  SNMP_PORT: string;
  localDateTime: string;
  name: String;
}
