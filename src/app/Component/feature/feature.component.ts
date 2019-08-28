import {Component, OnInit} from '@angular/core';
import {Feature, FeatureService} from 'src/app/Service/feature.service';
import {ServerService} from '../../Service/server/server.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  feature: Feature;
  features: Feature[];
  data: any;
  pagenumber: number;
  size: number;
  res: any;

  update(value: number) {
    this.pagenumber = value;
  }

  update2(value: number) {
    this.size = value;
  }

  constructor(private get: FeatureService, private serverService: ServerService) {
  }

  ngOnInit() {
    this.sendRequest();
  }

  sendRequest() {
    console.log(this.pagenumber, this.size);
    if (this.pagenumber === undefined) {
      this.pagenumber = 1;
      this.size = 10;
    }
    this.get.GetFeaturesBelongToServer(this.serverService.getCurrentServer(), this.pagenumber, this.size).subscribe(
      res => {
        this.res = res;
        this.features = res.content;
      }, err => console.log(err)
    );
  }

  applySearch(value: String) {
    console.log('Enter');
    this.get.searchFunction(value).subscribe(
      res => {
        this.features = res;
        console.log(res);
      }, err => console.log(err)
    );
  }


}
