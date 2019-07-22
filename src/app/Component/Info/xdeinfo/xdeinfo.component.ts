import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GetXdesService, Xde } from 'src/app/Service/get-xdes.service';

@Component({
  selector: 'app-xdeinfo',
  templateUrl: './xdeinfo.component.html',
  styleUrls: ['./xdeinfo.component.scss']
})
export class XdeinfoComponent implements OnInit, OnDestroy {
  id: number;
  private sub: any;
  xde: Xde;
  exist: boolean = true;
  constructor(private xdeService: GetXdesService, private route: ActivatedRoute, httpClient: HttpClient, ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.getInfo();
  }
  getInfo() {
    this.xdeService.getXde(this.id).subscribe(
      res => {
        this.xde = res;

      }, err => { console.log(err); this.exist = false }
    );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
