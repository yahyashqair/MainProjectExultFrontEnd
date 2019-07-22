import { Component, OnInit, OnDestroy } from '@angular/core';
import { Feature, FeatureService } from 'src/app/Service/feature.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-featureinfo',
  templateUrl: './featureinfo.component.html',
  styleUrls: ['./featureinfo.component.scss']
})
export class FeatureinfoComponent implements OnInit, OnDestroy {
  id: number;
  private sub: any;
  feature: Feature;
  exist: boolean = true;
  constructor(private featureService: FeatureService, private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.getInfo();
  }
  getInfo() {
    this.featureService.getFeature(this.id).subscribe(
      res => {
        this.feature = res;
      }, err => { console.log(err); this.exist = false }
    );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
