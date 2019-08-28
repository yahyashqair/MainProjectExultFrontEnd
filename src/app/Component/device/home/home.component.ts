import {Component, OnInit, PipeTransform} from '@angular/core';
import {Device, DeviceService} from '../../../Service/device.service';
import {Profile} from '../../../Service/profile.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Message} from 'primeng/api';
import {ServerService} from '../../../Service/server/server.service';
import {TemplateService} from '../../../Service/device/template.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  devices: Device[];
  showForm: boolean;
  templates: any[];
  selectedTemplate: any;
  servers: any[];
  selectedServer: any;

  obj: any;
  msgs: Message[] = [];
  deviceForm = new FormGroup({
    serverId: new FormControl(''),
    templateId: new FormControl('')
  });


  constructor(private deviceService: DeviceService, private rout: Router, private serverService: ServerService, private templateService: TemplateService) {
    templateService.GetDevices().subscribe(data => {
      console.log('data is : ');
      console.log(data);
      this.templates = new Array();
      this.templates.push({label: 'Select Templates', value: null});
      for (let i = 0; i < data.length; i++) {
        this.templates.push({label: data[i].CLI_ADDRESS, value: data[i].id});
      }
      console.log('objects:');
      console.log(this.templates);
    });
    serverService.getServers().subscribe(data => {
      console.log('data is : ');
      console.log(data);
      this.servers = new Array();
      this.servers.push({label: 'Select Server', value: null});
      for (let i = 0; i < data.length; i++) {
        this.servers.push({label: data[i].ipAddress, value: data[i].id});
      }
      console.log('objects:');
      console.log(this.servers);
    });

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
    console.log(this.deviceForm);
    this.deviceService.addDeviceFromServer(this.deviceForm.value.templateId, this.deviceForm.value.serverId);
    /*
    * .subscribe(data => {
        console.log(data);
        this.show('success', 'Add Successfully');
      },
      error => {
        this.show('danger', 'Error');
      });
    * */
  }

  syncDevice(id: number) {
    this.deviceService.syncDevice(id).subscribe(data => {
      console.log(data);
      this.show('info', 'device is Synced');
    }, err => {
      this.show('danger', 'Error: ' + err);
    });

  }


  showform() {
    this.showForm = !this.showForm;
  }
}
