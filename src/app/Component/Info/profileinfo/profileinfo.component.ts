import { Component, OnInit, OnDestroy } from '@angular/core';
import { Feature } from 'src/app/Service/feature.service';
import { ProfileService, Profile, ProfileRelation } from 'src/app/Service/profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { p } from '@angular/core/src/render3';
import {
  VisEdges,
  VisNetworkData,
  VisNetworkOptions,
  VisNetworkService,
  VisNode,
  VisNodes,
  VisNetwork
} from 'ngx-vis';
class ExampleNetworkData implements VisNetworkData {
  public nodes: VisNodes;
  public edges: VisEdges;
}

@Component({
  selector: 'app-profileinfo',
  templateUrl: './profileinfo.component.html',
  styleUrls: ['./profileinfo.component.scss']
})
export class ProfileinfoComponent implements OnInit, OnDestroy {
  id: number;
  private sub: any;
  profile: Profile;
  parents: Profile[];

  public visNetwork: string = 'networkId1';
  public visNetworkData: ExampleNetworkData;
  public visNetworkOptions: VisNetworkOptions;

  exist: boolean = true;
  constructor(private profileService: ProfileService, private rout: Router ,private route: ActivatedRoute,private visNetworkService: VisNetworkService ) {
    route.params.subscribe(val => {
      this.sub = this.route.params.subscribe(params => {
        this.id = +params['id'];
      });
      this.getInfo();});
  
   }

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
        this.profileService.getParents(this.id).subscribe(
          res => {
            this.parents = res;
            this.graph();
          }, err => { console.log(err); this.exist = false }
        );
      }, err => { console.log(err); this.exist = false }
    );

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  graph() {
    this.visNetworkService.on(this.visNetwork, 'doubleClick');
    this.visNetworkService.doubleClick
    .subscribe((eventData: any[]) => {
      //console.log(eventData);
      if(eventData[1].nodes.length>0){
        let id = eventData[1].nodes[0] ;
        this.rout.navigateByUrl('profile/'+id);
      }
    });

    var listProfile = new Array();
    var listRelation = new Array();
    for (var i = 0; i < this.parents.length; i++) {
      listProfile.push({ id: this.parents[i].id, label: this.parents[i].name });
      if (i != this.parents.length - 1) {
        listRelation.push({ from: this.parents[i + 1].id, to: this.parents[i].id });
      }
    }
    const nodes = new VisNodes(listProfile);
    const edges = new VisEdges(listRelation);
    this.visNetworkData = {
      nodes,
      edges,
  };

    this.visNetworkService.fit(this.visNetwork);
    // var nodes = new vis.DataSet(listProfile);
    // var edges = new vis.DataSet(listRelation);

    // create a network
    // var container = document.getElementById('mynetwork');

    // provide the data in the vis format
    this.visNetworkOptions = {
      edges: {
        arrows: {
          to: { enabled: true, scaleFactor: 1, type: 'arrow' }
        }
      },
      layout: {
        randomSeed: undefined,
        improvedLayout: true,
        hierarchical: {
          enabled: true,
          levelSeparation: 150,
          nodeSpacing: 100,
          treeSpacing: 200,
          blockShifting: true,
          edgeMinimization: true,
          parentCentralization: true,
          direction: 'UD',        // UD, DU, LR, RL
          sortMethod: 'directed'   // hubsize, directed
        }
      }
    };

    // initialize your network!
    // var network = new vis.Network(container, data, options);
    // network.on('doubleClick', function (properties) {
    //   if (properties.nodes.length > 0) {
    //     window.location.href = "/profile/" + properties.nodes[0];
    //     //window['angularComponentRef'].changeRoute(properties.nodes[0]);
    //   }
    // });

  }

}
