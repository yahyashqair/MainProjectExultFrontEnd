import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.scss']
})
export class MatchingComponent implements OnInit {
  deviceForm = new FormGroup({
    CLI_ADDRESS : new FormControl(''),
    CLI_LOGIN_USERNAME : new FormControl(''),
    CLI_LOGIN_PASSWORD : new FormControl(''),
    CLI_PORT : new FormControl(''),
    CLI_TRANSPORT : new FormControl(''),
    cli_enable_password : new FormControl(''),
    SNMP_READ_CS  : new FormControl(''),
    SNMP_PORT : new FormControl('')
  });

  constructor() {
  }

  onSubmit() {
    console.warn(this.deviceForm.value);
  }

  ngOnInit() {
  }

}
