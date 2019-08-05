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

  constructor(private http: HttpClient) {
  }
}

export interface Device {
  cli_ADDRESS: string;
  cli_LOGIN_USERNAME: string;
  cli_LOGIN_PASSWORD: string;
  cli_PORT: string;
  cli_TRANSPORT: string;
  cli_enable_password: string;
  snmp_READ_CS: string;
  snmp_PORT: string;
  profileSet: Profile[];
}
