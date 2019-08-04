import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Profile, ProfileService} from '../../../Service/profile.service';
import {Router} from '@angular/router';
import {LazyLoadEvent, SelectItem} from 'primeng/api';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.scss']
})
export class MatchingComponent implements OnInit {

  profile: Profile;
  profiles: Profile[];
  totalRecords: number;
  loading: boolean;


  deviceForm = new FormGroup({
    CLI_ADDRESS: new FormControl(''),
    CLI_LOGIN_USERNAME: new FormControl(''),
    CLI_LOGIN_PASSWORD: new FormControl(''),
    CLI_PORT: new FormControl(''),
    CLI_TRANSPORT: new FormControl(''),
    cli_enable_password: new FormControl(''),
    SNMP_READ_CS: new FormControl(''),
    SNMP_PORT: new FormControl('')
  });

  onSubmit() {
    this.profileService.getmatching(this.deviceForm.value).subscribe(data => {
      this.profiles = data;
    });
  }


  constructor(private profileService: ProfileService, private rout: Router) {
  }

  ngOnInit() {

  }


}
