import { Component, OnInit, NgZone } from '@angular/core';
import { ProfileService, Profile, ProfileRelation } from 'src/app/Service/profile.service';
import { Router } from '@angular/router';
import { FeatureService } from 'src/app/Service/feature.service';
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
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})

export class TreeComponent implements OnInit {

  public visNetwork: string = 'networkId1';
  public visNetworkData: ExampleNetworkData;
  public visNetworkOptions: VisNetworkOptions;

  constructor(private profileServise: ProfileService, private visNetworkService: VisNetworkService,private _ngZone: NgZone) {

  }

  profiles: Profile[];
  relations: ProfileRelation[];

  ngOnInit() {
    console.log("Sfasdf");

    this.profileServise.GetProfiles().subscribe(
      res => {
        this.profiles = res;
        this.profileServise.GetRelations().subscribe(
          res => {
            this.relations = res;
            this.graph(this.profiles, this.relations);
          }, err => console.log(err)
        );
      }, err => console.log(err)
    );

  }

  graph(profiles: Profile[], relations: ProfileRelation[]) {
    console.log("Sfasdf");
    var listProfile = new Array();
    var id, label;
    for (var i = 0; i < profiles.length; i++) {
      id = profiles[i].id;
      label = profiles[i].name;
      listProfile.push({ id, label });
    }
    var listRelation = new Array();
    var from, to;
    for (var i = 0; i < relations.length; i++) {
      from = relations[i].parent;
      to = relations[i].child;
      listRelation.push({ from, to });
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
  }

}
