import { Component, OnInit } from '@angular/core';
import vis from 'vis';
import { ProfileService, Profile, ProfileRelation } from 'src/app/Service/profile.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  constructor(private profileServise: ProfileService) { }
  profiles: Profile[];
  relations: ProfileRelation[];
  ngOnInit() {
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
    var listProfile = new Array()
    var id, label;
    for (var i = 0; i < profiles.length; i++) {
      id = profiles[i].id;
      label = profiles[i].name;
      listProfile.push({ id, label });
    }
    var nodes = new vis.DataSet(listProfile);

    var listRelation = new Array()
    var from, to;
    for (var i = 0; i < relations.length; i++) {
      from = relations[i].parent;
      to = relations[i].child;
      listRelation.push({ from, to });
    }

    // create an array with edges
    var edges = new vis.DataSet(listRelation);

    // create a network
    var container = document.getElementById('mynetwork');

    // provide the data in the vis format
    var data = {
      nodes: nodes,
      edges: edges
    };
    var options = {
      edges: {
        arrows: {
          to: { enabled: true, scaleFactor: 1, type: 'arrow' }
        },"smooth": {
          "roundness": 0.3
        }},
        layout: {
          randomSeed: undefined,
          improvedLayout:true,
          hierarchical: {
            enabled:true,
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
        var network = new vis.Network(container, data, options);

      }

    }
