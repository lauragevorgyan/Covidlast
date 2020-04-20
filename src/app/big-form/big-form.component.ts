import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Network, DataSet } from 'vis';
@Component({
  selector: 'app-big-form',
  templateUrl: './big-form.component.html',
  styleUrls: ['./big-form.component.css']
})
export class BigFormComponent implements AfterViewInit {

  @ViewChild('network',{static:false}) el: ElementRef;
  private networkInstance: any;

  ngAfterViewInit() {
    const container = this.el.nativeElement;
    const nodes = new DataSet<any>([{"id": 0, "label": 0, "shape": "dot", "title": "0"}, {"id": 1, "label": 1, "shape": "dot", "title": "1"}, {"id": 2, "label": 2, "shape": "dot", "title": "2"}, {"id": 3, "label": 3, "shape": "dot", "title": "3"}, {"id": 4, "label": 4, "shape": "dot", "title": "4"}, {"id": 15, "label": 15, "shape": "dot"}]);

    const edges = new DataSet<any>([{"from": 0, "to": 1}, {"from": 0, "to": 2}, {"from": 0, "to": 3}, {"from": 0, "to": 4}, {"from": 1, "to": 2}, {"from": 1, "to": 3}, {"from": 1, "to": 4}, {"from": 2, "to": 3}, {"from": 2, "to": 4}, {"from": 3, "to": 4}, {"from": 15, "to": 3}]);
    const data = { nodes, edges };
    this.networkInstance = new Network(container, data,
      {
        autoResize: true,
    });
  }
}
