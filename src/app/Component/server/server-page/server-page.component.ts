import {Component, OnInit} from '@angular/core';
import {Device, DeviceService} from '../../../Service/device.service';
import {ActivatedRoute} from '@angular/router';
import {FeatureService} from '../../../Service/feature.service';
import {ProfileService} from '../../../Service/profile.service';
import {GetXdesService} from '../../../Service/get-xdes.service';
import {Server, ServerService} from '../../../Service/server/server.service';

@Component({
  selector: 'app-server-page',
  templateUrl: './server-page.component.html',
  styleUrls: ['./server-page.component.scss']
})
export class ServerPageComponent implements OnInit {
  id: number;
  private sub: any;
  server: Server;
  exist: boolean = true;
  numberOfXdes;
  numberOfProfiles;
  numberOfFeatures;
  numberOfDevices;

  constructor(private route: ActivatedRoute, private serverService: ServerService, private deviceService: DeviceService, private featureService: FeatureService, private profileService: ProfileService, private xdeService: GetXdesService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.getInfo();
  }

  getInfo() {
    this.serverService.getServer(this.id).subscribe(data => {
      this.exist = true;
      this.server = data;
    }, error => {
      this.exist = false;
      return;
    });
    // numberOfXdes
    // numberOfProfiles;
    // numberOfFeatures;
    // numberOfDevices;

    this.featureService.GetFeaturesBelongToServer(this.id, 1, 2).subscribe(data => {
      this.numberOfFeatures = data.totalElements;
    });

    this.profileService.getProfilesBelongTo(this.id).subscribe(data => {
      this.numberOfProfiles = data.length;
    });

    this.xdeService.getXdesBelongTo(this.id, 1, 2).subscribe(data => {
      this.numberOfXdes = data.totalElements;
    });

  }
}
