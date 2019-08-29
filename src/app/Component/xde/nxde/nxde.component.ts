import {Component, OnInit} from '@angular/core';
import {Xde, GetXdesService} from 'src/app/Service/get-xdes.service';
import {Router} from '@angular/router';
import {SelectItem, LazyLoadEvent} from 'primeng/api';
import {ServerService} from '../../../Service/server/server.service';

@Component({
  selector: 'app-nxde',
  templateUrl: './nxde.component.html',
  styleUrls: ['./nxde.component.scss']
})
export class NxdeComponent implements OnInit {

  xde: Xde;
  xdes: Xde[];
  totalRecords: number;
  loading: boolean;
  searchQuery: string;

  constructor(private xdeService: GetXdesService, private rout: Router, private serverService: ServerService) {
  }

  ngOnInit() {
    this.searchQuery = '';
    this.getData();
  }

  getData() {
    this.xdeService.getXdesBelongTo(this.serverService.getCurrentServer(), this.searchQuery, 1, 4).subscribe(
      res => {
        this.xdes = res.content;
        this.totalRecords = res.totalElements;
      }, err => console.log(err)
    );
  }

  selectedXde: Xde;

  displayDialog: boolean;

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;


  loadCarsLazy(event: LazyLoadEvent) {
    this.loading = true;
    console.log(event.first + ' :first  ');
    console.log(event.rows + ' : rows # ');
    this.xdeService.getXdesBelongTo(this.serverService.getCurrentServer(), this.searchQuery, event.first / 4, 4).subscribe(res => {
      this.xdes = res.content;
      this.totalRecords = res.totalElements;
      this.loading = false;
    });
  }

  selectprofile(event: Event, xde: Xde) {
    this.selectedXde = xde;
    this.displayDialog = true;
    event.preventDefault();
  }

  routeprofile(xde: Xde) {
    this.rout.navigateByUrl('xde/' + xde.id);
  }

  onSortChange(event) {
    let value = event.value;
    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  applySearch(value: string) {
    this.searchQuery = value;
    this.getData();
  }

  onDialogHide() {
    this.selectedXde = null;
  }
}
