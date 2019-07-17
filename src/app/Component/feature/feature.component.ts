import { Component, OnInit } from '@angular/core';
import {Feature, FeatureService} from 'src/app/Service/feature.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  feature:Feature;
  features: Feature[];
  data: any;
  
  constructor(private get: FeatureService) { }

  ngOnInit() {
    this.get.GetFeatures().subscribe(
      res => {
        this.features = res;
      }, err => console.log(err)
    );
  }

}
