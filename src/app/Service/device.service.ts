import {Injectable} from '@angular/core';
import {Profile} from './profile.service';
import {HttpClient} from '@angular/common/http';
import {FormControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  urlAllDevice = 'http://localhost:8080/device/';
  urlSync = 'http://localhost:8080/device/sync/';

  urlDevice = 'http://localhost:8080/device/';

  public GetDevices() {
    return this.http.get<Device[]>(this.urlAllDevice);
  }

  public syncDevice(id: number) {
    return this.http.get<Device>(this.urlSync + id);
  }

  public getDevice(id: number) {
    return this.http.get<Device>(this.urlDevice + id);
  }

  public addDevice(data: any) {
    return this.http.post<Device[]>(this.urlDevice, data);
  }

  constructor(private http: HttpClient) {
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
