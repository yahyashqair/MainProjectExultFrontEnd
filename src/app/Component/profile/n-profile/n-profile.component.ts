import { Component, OnInit } from '@angular/core';
import { Profile, ProfileService } from 'src/app/Service/profile.service';
import { SelectItem, LazyLoadEvent } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-n-profile',
  templateUrl: './n-profile.component.html',
  styleUrls: ['./n-profile.component.scss']
})
export class NProfileComponent implements OnInit {
  profile: Profile;
  profiles: Profile[];
  totalRecords: number;
  loading: boolean;

  constructor(private profileService: ProfileService, private rout: Router) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.profileService.getProfileWithPagination(1,4).subscribe(
      res => {
        this.profiles = res.content;
        this.totalRecords=res.totalElements
      }, err => console.log(err)
    );
  }

  selectedprofile: Profile;

  displayDialog: boolean;

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;


  loadCarsLazy(event: LazyLoadEvent) {
    this.loading = true;
    console.log(event.first+" :first  ");
    console.log(event.rows+" : rows # ");
    this.profileService.getProfileWithPagination(event.first/4, 4).subscribe(res => {
      this.profiles = res.content;
      this.totalRecords=res.totalElements;
      this.loading = false;
    });
}
  selectprofile(event: Event, profile: Profile) {
    this.selectedprofile = profile;
    this.displayDialog = true;
    event.preventDefault();
  }
  
  routeprofile(profile: Profile) {
    this.rout.navigateByUrl('profile/'+profile.id);
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onDialogHide() {
    this.selectedprofile = null;
  }

}
