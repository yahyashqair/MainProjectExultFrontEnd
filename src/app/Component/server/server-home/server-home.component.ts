import { Component, OnInit } from '@angular/core';
import {Device, DeviceService} from '../../../Service/device.service';
import {Message} from 'primeng/api';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Server, ServerService} from '../../../Service/server/server.service';

@Component({
  selector: 'app-server-home',
  templateUrl: './server-home.component.html',
  styleUrls: ['./server-home.component.scss']
})
export class ServerHomeComponent implements OnInit {
  servers: Server[];
  showForm: boolean;
  obj: any;
  msgs: Message[] = [];
  serverForm = new FormGroup({
    ipAddress: new FormControl(''),
    hostName: new FormControl(''),
    password: new FormControl(''),
    username: new FormControl(''),
  });


  constructor(private serverService: ServerService, private rout: Router) {
  }

  show(type: string, msg: string) {
    this.msgs.push({severity: type, summary: 'Message', detail: msg});
  }

  hide() {
    this.msgs = [];
  }

  sendRequest() {
    this.serverService.getServers().subscribe(data => {
      this.servers = data;
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.sendRequest();
  }

  routedevice(profile: Server) {
    this.rout.navigateByUrl('server/' + profile.id);
  }

  onSubmit() {
    this.obj = this.deviceForm.value;
    console.log(this.obj);
    this.serverService.addServer(this.obj).subscribe(data => {
        console.log(data);
        this.show('success', 'Add Successfully');
      },
      error => {
        this.show('danger', 'Error');
      });
  }

  showform() {
    this.showForm = !this.showForm;
  }
}
