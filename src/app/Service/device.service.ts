import {Injectable} from '@angular/core';
import {Profile} from './profile.service';
import {HttpClient} from '@angular/common/http';
import {FormControl} from '@angular/forms';
import {Server, ServerService} from './server/server.service';
import {DeviceTemplate, TemplateService} from './device/template.service';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  urlAllDevice = 'http://localhost:8080/device/';
  urlAllDeviceBelongToServer = 'http://localhost:8080/device/server/';
  urlSync = 'http://localhost:8080/device/sync/';
  urlDevice = 'http://localhost:8080/device/';
  subject: Subject<any> = new Subject();

  public GetDevices() {
    return this.http.get<Device[]>(this.urlAllDeviceBelongToServer + this.serverService.getCurrentServer());
  }

  public syncDevice(id: number) {
    return this.http.get<Device>(this.urlSync + id);
  }

  public getDevice(id: number) {
    return this.http.get<Device>(this.urlDevice + id);
  }

  public addDevice(data: any) {
    return this.http.post<Device[]>(this.urlDevice + this.serverService.getCurrentServer(), data);
  }

  public addDeviceFromServer(templateId: number, serverId: number) {
    console.log(templateId + ' : ' + serverId);
    this.templateService.getDevice(templateId).subscribe(data => {
      this.http.post<DeviceTemplate[]>(this.urlDevice + serverId, data).subscribe(d => {
        console.log(d);
      }, error => {
        console.log(error);
      });
    });
  }


  constructor(private http: HttpClient, private serverService: ServerService, private templateService: TemplateService) {
  }
}

export interface Device {
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
  profileSet: Profile[];
  name: String;
}
