import { Component, OnInit } from '@angular/core';
import { Feature, FeatureService } from 'src/app/Service/feature.service';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-nfeature',
  templateUrl: './nfeature.component.html',
  styleUrls: ['./nfeature.component.scss']
})
export class NfeatureComponent implements OnInit {

  features: Feature[];

  totalRecords: number;

  cols: any[];

  loading: boolean;

  constructor(private featureService: FeatureService) { }

  ngOnInit() {
    this.featureService.GetFeatures(1, 10).subscribe(data => {
      this.features = data.content;
      this.totalRecords=data.totalElements;
    })


    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Name' },
      { field: 'maven.groupId', header: 'maven.artifactId' },
      { field: 'maven.artifactId', header: 'maven.artifactId' }
    ];
  }
  
  loadCarsLazy(event: LazyLoadEvent) {
    this.loading = true;
    console.log(event.first+" :first  ");
    console.log(event.rows+" : rows # ");
    this.featureService.GetFeatures(event.first/10, 10).subscribe(data => {
      this.features = data.content;
      this.loading = false;
    })
   
}

}
