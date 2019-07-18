import { Component, OnInit } from '@angular/core';
import { GetXdesService, Xde } from 'src/app/Service/get-xdes.service';
import { Router, ActivatedRoute } from '@angular/router';
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
  pagenumber:number ;
  size:number  ;
  res:any;
  update(value: number) { this.pagenumber = value; }
  update2(value: number) { this.size = value; }

  constructor(private get: GetXdesService,private route : ActivatedRoute,
    private router : Router) {
  }
  ngOnInit() {
    this.sendRequest();
  }
  sendRequest(){
    console.log(this.pagenumber,this.size);
    if(this.pagenumber==undefined){
      this.pagenumber=1;
      this.size=10;
    }
    this.get.GetXdes(this.pagenumber,this.size).subscribe(
      res => {
        this.res=res;
        this.xdes = res.content;
      }, err => console.log(err)
    );
  }


}
