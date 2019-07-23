import { Component, OnInit } from '@angular/core';
import { Profile, ProfileService } from 'src/app/Service/profile.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-n-profile',
  templateUrl: './n-profile.component.html',
  styleUrls: ['./n-profile.component.scss']
})
export class NProfileComponent implements OnInit {
  profile: Profile;
  profiles: Profile[];

  constructor(private profileService :ProfileService) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this.profileService.GetProfiles().subscribe(
      res => {
        this.profiles = res;
      }, err => console.log(err)
    );
  }

  selectedprofile: Profile;

  displayDialog: boolean;

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;


  selectprofile(event: Event, profile: Profile) {
      this.selectedprofile = profile;
      this.displayDialog = true;
      event.preventDefault();
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
