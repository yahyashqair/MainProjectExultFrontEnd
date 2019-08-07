import {Component, OnInit} from '@angular/core';
import {Device, DeviceService} from '../../../Service/device.service';
import {Profile} from '../../../Service/profile.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  devices: Device[];
  showForm: boolean;
  transportType: any;
  selectedType: any;
  obj: any;
  deviceForm = new FormGroup({
    CLI_ADDRESS: new FormControl(''),
    CLI_LOGIN_USERNAME: new FormControl(''),
    CLI_LOGIN_PASSWORD: new FormControl(''),
    CLI_PORT: new FormControl(''),
    CLI_TRANSPORT: new FormGroup(''),
    CLI_ENABLE_PASSWORD: new FormControl(''),
    SNMP_READ_CS: new FormControl(''),
    SNMP_PORT: new FormControl('')
  });


  constructor(private deviceService: DeviceService, private rout: Router) {
    this.transportType = [
      {label: 'Select City', value: null},
      {label: 'Telnet', value: 'telent'},
      {label: 'SSH2', value: 'ssh2'},
    ];
  }

  sendRequest() {
    this.deviceService.GetDevices().subscribe(data => {
      this.devices = data;
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.sendRequest();
  }

  routedevice(profile: Profile) {
    this.rout.navigateByUrl('device/' + profile.id);
  }

  onSubmit() {
    this.obj = this.deviceForm.value;
    console.log(this.obj);
    this.deviceService.addDevice(this.obj).subscribe(data => {
      console.log(data);
    });
  }

  showform() {
    this.showForm = !this.showForm;
  }
}
