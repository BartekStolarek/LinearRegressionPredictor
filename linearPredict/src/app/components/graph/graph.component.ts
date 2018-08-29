import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'graph-data',
  templateUrl: './graph.component.html'
})
export class GraphComponent {

  @Input() data: any;
  public loaded: boolean = false;

  ngOnChanges(changes: any) {
    this.drawGraph();
  }

  drawGraph() {
    this.loaded = false;

    let margin = {top: 50, right: 50, bottom: 50, left: 50}
    , width = window.innerWidth/1.75 - margin.left - margin.right
    , height = window.innerHeight/1.75 - margin.top - margin.bottom;

    // The number of datapoints
    let n = this.data.length;
    
    let xScale = d3.scaleLinear()
        .domain([this.data[0].x - 10, this.data[n-1].x])
        .range([0, width]);
    
    let yScale = d3.scaleLinear()
        .domain([0, Math.ceil(this.data[n-1].y)])
        .range([height, 0]);
    
    let line = d3.line()
        .x(function(d, i) { return xScale(d.x); })
        .y(function(d) { return yScale(d.y); }) 
        .curve(d3.curveMonotoneX)

    let dataset = [];
    for (let i = 0; i < this.data.length; i++) {
      dataset.push({
        "x": this.data[i].x,
        "y": this.data[i].y
      })
    }
    
    //If previous graph existed- remove
    if (d3.select("#graph-content svg")) {
      d3.select("#graph-content svg").remove();
    }

    let svg = d3.select("#graph-content").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale));
    
    svg.append("g")
        .attr("class", "y axis")
        .call(d3.axisLeft(yScale));
    
    svg.append("path")
        .data([dataset])
        .attr("class", "line")
        .attr("d", line);
    
    svg.selectAll(".dot")
        .data(dataset)
      .enter().append("circle")
        .attr("class", "dot")
        .attr("cx", function(d, i) { return xScale(d.x) })
        .attr("cy", function(d) { return yScale(d.y) })
        .attr("r", 5);

    this.loaded = true;
  }
  
}