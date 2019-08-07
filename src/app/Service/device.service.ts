import {Injectable} from '@angular/core';
import {Profile} from './profile.service';
import {HttpClient} from '@angular/common/http';
import {FormControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  urlAllDevice = 'http://localhost:8080/device/';
  urlDevice = 'http://localhost:8080/device/';

  public GetDevices() {
    return this.http.get<Device[]>(this.urlAllDevice);
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
  CLI_ADDRESS: string;
  CLI_LOGIN_USERNAME: string;
  CLI_LOGIN_PASSWORD: string;
  CLI_PORT: string;
  CLI_TRANSPORT: string;
  cli_enable_password: string;
  SNMP_READ_CS: string;
  SNMP_PORT: string;
  localDateTime: string;
  profileSet: Profile[];
}
