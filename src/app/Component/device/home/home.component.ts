import {Component, OnInit} from '@angular/core';
import {Device, DeviceService} from '../../../Service/device.service';
import {Profile} from '../../../Service/profile.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Message} from 'primeng/api';

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
  msgs: Message[] = [];
  deviceForm = new FormGroup({
    CLI_ADDRESS: new FormControl(''),
    CLI_LOGIN_USERNAME: new FormControl(''),
    CLI_LOGIN_PASSWORD: new FormControl(''),
    CLI_PORT: new FormControl(''),
    CLI_TRANSPORT: new FormControl('161'),
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
    // this.CLI_PORT.setValue("161");
    this.deviceForm.patchValue({SNMP_PORT: '161'});
  }

  show() {
    this.msgs.push({severity: 'info', summary: 'Info Message', detail: 'Done Successfully'});
  }

  hide() {
    this.msgs = [];
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

  syncDevice(id: number) {
    this.deviceService.syncDevice(id).subscribe(data => {
      console.log(data);
      this.show();
    });

  }

  showform() {
    this.showForm = !this.showForm;
  }
}
