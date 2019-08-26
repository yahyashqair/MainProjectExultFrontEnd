import {Component, OnInit} from '@angular/core';
import {Feature, FeatureService} from '../../../Service/feature.service';
import {ActivatedRoute} from '@angular/router';
import {Device, DeviceService} from '../../../Service/device.service';

@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.component.html',
  styleUrls: ['./device-info.component.scss']
})
export class DeviceInfoComponent implements OnInit {
  id: number;
  private sub: any;
  device: Device;
  exist: boolean = true;

  constructor(private deviceService: DeviceService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.getInfo();
  }

  getInfo() {
    this.deviceService.getDevice(this.id).subscribe(
      res => {
        this.device = res;
      }, err => {
        console.log(err);
        this.exist = false;
      }
    );
  }

  sync() {
    this.deviceService.syncDevice(this.id).subscribe(data => {
      console.log(data);
      this.device = data;
    });
  }
}
