import {Component, OnInit} from '@angular/core';
import {ServerService} from '../../Service/server/server.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  server: any;

  constructor(private serverService: ServerService) {
    this.getServer();
    // this.server = this.serverService.getServer(this.serverService.serverId).subscribe(data => {
    //   this.server = data.ipAddress;
    // });
  }

  getServer() {
    this.serverService.getCurrentServerUpdated().subscribe(data => {
      this.server = data.ipAddress;
    });
  }

  ngOnInit() {
  }

}
