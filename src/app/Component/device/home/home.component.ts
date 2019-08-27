import {Component, OnInit, PipeTransform} from '@angular/core';
import {Device, DeviceService} from '../../../Service/device.service';
import {Profile} from '../../../Service/profile.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Message} from 'primeng/api';
import {ServerService} from '../../../Service/server/server.service';

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
  selectedProtocol: any;
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


  constructor(private deviceService: DeviceService, private rout: Router,private serverService:ServerService) {
    this.transportType = [
      {label: 'Select City', value: null},
      {label: 'Telnet', value: 'telnet'},
      {label: 'SSH2', value: 'ssh2'},
    ];
    this.deviceForm.patchValue({SNMP_PORT: '161'});
  }

  show(type: string, msg: string) {
    this.msgs.push({severity: type, summary: 'Message', detail: msg});
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

  routedevice(profile: Device) {
    this.rout.navigateByUrl('device/' + profile.id);
  }

  onSubmit() {
    this.obj = this.deviceForm.value;
    console.log(this.obj);
    this.deviceService.addDevice(this.obj).subscribe(data => {
        console.log(data);
        this.show('success', 'Add Successfully');
      },
      error => {
        this.show('danger', 'Error');
      });
  }

  syncDevice(id: number) {
    this.deviceService.syncDevice(id).subscribe(data => {
      console.log(data);
      this.show('info', 'device is Synced');
    }, err => {
      this.show('danger', 'Error: ' + err);
    });

  }

  selectProtocol(event) {
    console.log(event);
    console.log(this.selectedProtocol);
    if (this.selectedProtocol === 'telnet') {
      this.deviceForm.patchValue({CLI_PORT: '23'});
    } else if (this.selectedProtocol === 'ssh2') {
      this.deviceForm.patchValue({CLI_PORT: '22'});
    }
  }

  showform() {
    this.showForm = !this.showForm;
  }
}
