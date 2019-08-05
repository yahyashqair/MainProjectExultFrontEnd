import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Profile, ProfileRelation, ProfileService} from '../../../Service/profile.service';
import {Router} from '@angular/router';
import {LazyLoadEvent, SelectItem} from 'primeng/api';
import {VisEdges, VisNetworkData, VisNetworkOptions, VisNetworkService, VisNodes} from 'ngx-vis';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.scss']
})
//
// class ExampleNetworkData implements VisNetworkData {
//   public nodes: VisNodes;
//   public edges: VisEdges;
// }

export class MatchingComponent implements OnInit {

  profile: Profile;
  profiles: Profile[];
  totalRecords: number;
  loading: boolean;
  //
  // public visNetwork: string = 'networkId1';
  // public visNetworkData: ExampleNetworkData;
  // public visNetworkOptions: VisNetworkOptions;


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
    this.loading = true;
    this.profileService.getmatching(this.deviceForm.value).subscribe(data => {
      console.log(data);
      this.profiles = data;
      this.loading = false;
    });
  }


  constructor(private profileService: ProfileService, private rout: Router, private visNetworkService: VisNetworkService) {
  }

  ngOnInit() {

  }

  routeprofile(profile: Profile) {
    this.rout.navigateByUrl('profile/' + profile.id);
  }

  //
  // graph(profiles: Profile[]) {
  //   this.visNetworkService.on(this.visNetwork, 'doubleClick');
  //   this.visNetworkService.doubleClick
  //     .subscribe((eventData: any[]) => {
  //       //console.log(eventData);
  //       if (eventData[1].nodes.length > 0) {
  //         let id = eventData[1].nodes[0];
  //         this.rout.navigateByUrl('profile/' + id);
  //       }
  //     });
  //
  //   this.visNetworkService.on(this.visNetwork, 'click');
  //   this.visNetworkService.click
  //     .subscribe((eventData: any[]) => {
  //       console.log(eventData);
  //       if (eventData[1].nodes.length > 0) {
  //         let id = eventData[1].nodes[0];
  //         this.profileService.getProfile(id).subscribe(data => {
  //
  //           document.getElementById('clickmsg').innerHTML = data.name.toString();
  //           console.log(eventData[1].pointer.DOM.x + ' , ' + eventData[1].pointer.DOM.y);
  //           (document.querySelector('#clickmsg') as HTMLElement).style.top = eventData[1].pointer.DOM.y + 'px';
  //           (document.querySelector('#clickmsg') as HTMLElement).style.left = eventData[1].pointer.DOM.x + 'px';
  //
  //           // document.getElementById("clickmsg").style.top=eventData[1].pointer.DOM.x;
  //           // document.getElementById("clickmsg").style.left=eventData[1].pointer.DOM.x;
  //         });
  //       } else {
  //         document.getElementById('clickmsg').innerHTML = null;
  //       }
  //     });
  //
  //   var listProfile = new Array();
  //   var id, label;
  //   for (var i = 0; i < profiles.length; i++) {
  //     id = profiles[i].id;
  //     label = profiles[i].maven.artifactId;
  //     listProfile.push({id, label});
  //   }
  //
  //   const nodes = new VisNodes(listProfile);
  //   const edges = new VisEdges();
  //   this.visNetworkData = {
  //     nodes,
  //     edges,
  //   };
  //
  //   this.visNetworkService.fit(this.visNetwork);
  //
  //   // provide the data in the vis format
  //   this.visNetworkOptions = {
  //     configure: {
  //       enabled: true,
  //       showButton: true
  //     }
  //   };
  // }
}

