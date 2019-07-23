import { Component, OnInit } from '@angular/core';
import { Profile, ProfileService } from 'src/app/Service/profile.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: Profile;
  profiles: Profile[];
  data: any;
  pagenumber: number;
  size: number;
  res: any;
  update(value: number) { this.pagenumber = value; }
  update2(value: number) { this.size = value; }

  constructor(private get: ProfileService, private route: ActivatedRoute,
    private router: Router) {
  }
  ngOnInit() {
    this.sendRequest();
  }
  sendRequest() {
    console.log(this.pagenumber, this.size);
    if (this.pagenumber == undefined) {
      this.pagenumber = 1;
      this.size = 10;
    }
    this.get.getProfileWithPagination(this.pagenumber, this.size).subscribe(
      res => {
        this.res = res;
        this.profiles = res.content;
      }, err => console.log(err)
    );
  }


}
