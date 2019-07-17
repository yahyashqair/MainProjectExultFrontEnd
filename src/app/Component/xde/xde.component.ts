import { Component, OnInit } from '@angular/core';
import { GetXdesService, Xde } from 'src/app/Service/get-xdes.service';
declare var $: any;

@Component({
  selector: 'app-xde',
  templateUrl: './xde.component.html',
  styleUrls: ['./xde.component.scss']
})
export class XdeComponent implements OnInit {
  xde: Xde;
  xdes: Xde[];
  data: any;
  constructor(private get: GetXdesService) {
  }
  ngOnInit() {
    this.get.GetXdes().subscribe(
      res => {
        this.xdes = res;
      }, err => console.log(err)
    );
  }


}
