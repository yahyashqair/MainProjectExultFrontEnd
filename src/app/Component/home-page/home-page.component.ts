import {Component, OnInit} from '@angular/core';
import {Server, ServerService} from '../../Service/server/server.service';
import {forEach} from '@angular/router/src/utils/collection';
import {DeviceTemplate, TemplateService} from '../../Service/device/template.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(serverService: ServerService, private templateService: TemplateService) {
    serverService.getServers().subscribe(data => {
      this.servers = data;
    });
    templateService.GetDevices().subscribe(data => {
      this.deviceTemplates = data;
    });
  }

  deviceTemplates: DeviceTemplate[];
  servers: Server[];

  ngOnInit() {
  }

}
