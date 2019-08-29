import {Component, OnInit} from '@angular/core';
import {Feature, FeatureService} from 'src/app/Service/feature.service';
import {LazyLoadEvent} from 'primeng/api';
import {ServerService} from '../../../Service/server/server.service';
import {Router} from '@angular/router';

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

  selectedFeature: Feature;

  displayDialog: boolean;

  searchQuery: string;

  sortKey: string;

  sortField: string;

  sortOrder: number;

  constructor(private featureService: FeatureService, private serverService: ServerService, private rout: Router) {
  }

  ngOnInit() {
    this.searchQuery = '';
    this.getData();
  }

  getData() {
    this.featureService.GetFeaturesBelongToServer(this.serverService.getCurrentServer(), this.searchQuery, 1, 4).subscribe(
      res => {
        this.features = res.content;
        this.totalRecords = res.totalElements;
        this.loading = false;
        console.log(res.content);
      }, err => console.log(err)
    );
  }


  loadCarsLazy(event: LazyLoadEvent) {
    this.loading = true;
    console.log(event.first + ' :first  ');
    console.log(event.rows + ' : rows # ');
    this.featureService.GetFeaturesBelongToServer(this.serverService.getCurrentServer(), this.searchQuery, event.first / 4, 4).subscribe(res => {
      this.features = res.content;
      this.totalRecords = res.totalElements;
      this.loading = false;
    });
  }

  selectFeature(event: Event, feature: Feature) {
    this.selectedFeature = feature;
    this.displayDialog = true;
    event.preventDefault();
  }

  routeprofile(feature: Feature) {
    this.rout.navigateByUrl('feature/' + feature.id);
  }

  onDialogHide() {
    this.selectedFeature = null;
  }

  applySearch(value: string) {
    this.searchQuery = value;
    this.getData();
  }


}
