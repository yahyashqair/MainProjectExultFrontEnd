import {Component, OnInit} from '@angular/core';
import {DeviceService} from '../../../Service/device.service';
import {Message} from 'primeng/api';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {ServerService} from '../../../Service/server/server.service';
import {DeviceTemplate, TemplateService} from '../../../Service/device/template.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  devices: DeviceTemplate [];
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


  constructor(private templateService: TemplateService, private rout: Router, private serverService: ServerService) {
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
    this.templateService.GetDevices().subscribe(data => {
      this.devices = data;
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.sendRequest();
  }

  // routedevice(profile: DeviceTemplate ) {
  //   this.rout.navigateByUrl('device/' + profile.id);
  // }

  onSubmit() {
    this.obj = this.deviceForm.value;
    console.log(this.obj);
    this.templateService.addDevice(this.obj).subscribe(data => {
        console.log(data);
        this.show('success', 'Add Successfully');
      },
      error => {
        this.show('danger', 'Error');
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
