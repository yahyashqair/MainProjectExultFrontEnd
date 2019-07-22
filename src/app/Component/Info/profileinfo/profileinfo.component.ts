import { Component, OnInit, OnDestroy } from '@angular/core';
import { Feature } from 'src/app/Service/feature.service';
import { ProfileService, Profile } from 'src/app/Service/profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profileinfo',
  templateUrl: './profileinfo.component.html',
  styleUrls: ['./profileinfo.component.scss']
})
export class ProfileinfoComponent  implements OnInit, OnDestroy {
  id: number;
  private sub: any;
  profile: Profile;
  exist: boolean = true;
  constructor(private profileService: ProfileService, private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.getInfo();
  }
  getInfo() {
    this.profileService.getProfile(this.id).subscribe(
      res => {
        this.profile = res;
      }, err => { console.log(err); this.exist = false }
    );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
