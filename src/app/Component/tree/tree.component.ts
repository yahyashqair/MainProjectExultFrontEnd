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
import { element } from 'protractor';
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

  constructor(private profileServise: ProfileService, private rout: Router, private visNetworkService: VisNetworkService, private _ngZone: NgZone) {

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
    this.visNetworkService.on(this.visNetwork, 'doubleClick');
    this.visNetworkService.doubleClick
      .subscribe((eventData: any[]) => {
        //console.log(eventData);
        if (eventData[1].nodes.length > 0) {
          let id = eventData[1].nodes[0];
          this.rout.navigateByUrl('profile/' + id);
        }
      });

    this.visNetworkService.on(this.visNetwork, 'click');
    this.visNetworkService.click
      .subscribe((eventData: any[]) => {
        console.log(eventData);
        if (eventData[1].nodes.length > 0) {
          let id = eventData[1].nodes[0];
          this.profileServise.getProfile(id).subscribe(data => {
            
            document.getElementById("clickmsg").innerHTML= data.name.toString();
            console.log(eventData[1].pointer.DOM.x + " , "+eventData[1].pointer.DOM.y );
            (document.querySelector('#clickmsg') as HTMLElement).style.top=eventData[1].pointer.DOM.y+"px";
            (document.querySelector('#clickmsg') as HTMLElement).style.left=eventData[1].pointer.DOM.x+"px";

            // document.getElementById("clickmsg").style.top=eventData[1].pointer.DOM.x;
            // document.getElementById("clickmsg").style.left=eventData[1].pointer.DOM.x;
          })
        }else{
          document.getElementById("clickmsg").innerHTML= null;
        }
      });

    var listProfile = new Array();
    var id, label;
    for (var i = 0; i < profiles.length; i++) {
      id = profiles[i].id;
      label = profiles[i].maven.artifactId;
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
