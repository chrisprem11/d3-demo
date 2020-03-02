import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-hexagon-data',
  templateUrl: './hexagon-data.component.html',
  styleUrls: ['./hexagon-data.component.scss']
})
export class HexagonDataComponent implements OnInit {

  chartData;
  tracks;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.chartData = this.dataService.getGeneratedData();
  }

  onTaskDrop(event: Event) {
    console.log(event)
  }

  
}
