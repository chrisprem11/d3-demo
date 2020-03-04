import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation, Renderer2 } from '@angular/core';
import * as d3 from 'd3';
import * as d3Hex from 'd3-hexbin';
import * as d3ScaleChromatic from 'd3-scale-chromatic';
import * as d3Geo from 'd3-geo';
import { DataService } from '../../../services/data/data.service';
import { text } from 'd3';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  @ViewChild('chart', {static: true}) private chartContainer: ElementRef;
  @Input() private data: Array<any>;
  private chart: any;
  chartData;
  element;
  isItemSelected= true;
  showAlternate = false;

  constructor(private dataService: DataService, private renderer: Renderer2) { }

  ngOnInit() {
    this.element = this.chartContainer.nativeElement;
    console.log(' data==> ', this.data);
    this.chartData = this.dataService.getGeneratedData();
    //this.showCustomView();
  }
  
  selectedItem(item){
    this.isItemSelected = true;
    this.showHexagonView(item);
  }

  showHexagonView(item){
    console.log('showing custom hexagon view');
    const svg_dx = 800;
    const svg_dy = 400;
    const margin_x = 100;
    this.element = this.chartContainer.nativeElement;
    if(this.element.children.length) {
      this.renderer.removeChild(this.element,this.element.children[0]);
    }

    const x = d3.scalePoint()
          .domain(d3.range(0, item.plants.length))
          .range([margin_x, svg_dx - margin_x]);

    const svg = d3.select(this.element).append('svg')
                .attr("viewBox",  [0, 0, 2000, 2000])
                .attr("stroke-width", 2);

    const drag_behavior = d3.drag()
                      .on("start", this.dragHexagonstarted)
                      .on("drag", this.draggedHexagon)
                      .on("end", this.dragHexagonEnded);
                      
    svg.append("g")
      .selectAll("polygon")
      .data(item.plants)
      .join("polygon")
        .attr("points", "300,150 225,280 75,280 0,150 75,20 225,20")
        .attr("fill", "white")
        .attr("stroke", (d) => { return d.anomalies > 10 ? 'red' : 'green' })
        .attr("stroke-width", "5")
      .call(drag_behavior)
      .transition()
      .duration((shape, i) => i * 800)
      .attr("transform", (shape, i) => "translate(" + x(i) + "," + (svg_dy / 2) + ")");

    this.chart = svg;
  }

  dragHexagonstarted(d) {
    d3.select(this.element).attr("stroke", (d) => { return d.anomalies > 10 ? 'red' : 'green' }).attr("stroke-width", "6");
  }

  draggedHexagon(d) {
    let dx = d3.event.sourceEvent.offsetX,
    dy = d3.event.sourceEvent.offsetY;
    d3.select(this)
    .attr("transform", shape => "translate(" + dx + "," + dy + ")");
    d3.select(this).attr("stroke", (d) => { return d.anomalies > 10 ? 'red' : 'green' }).attr("stroke-width", "6");
  }

  dragHexagonEnded(d) {
    console.log('drag end...',d3.event, d3.event.x , d3.event.y);
    d3.select(this).attr("stroke", (d) => { return d.anomalies > 10 ? 'red' : 'green' }).attr("stroke-width", "6");
    d3.select(this).enter().append('button').text('HE').attr("stroke","black");
  }

  saveCoordinates(d){
    console.log('saving coordinates... ', d);
  }

}
