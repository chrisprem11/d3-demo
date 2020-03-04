import { Injectable } from '@angular/core';
import * as SvgPanZoom from 'svg-pan-zoom';

const svgPanZoom = SvgPanZoom;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private panZoomInstance: any;

  data = [{
    "id": 1,
		"name": "Fleet_1",
		"plants": [
		{
      "id": 1,
			"label": "plant_1",
			"anomalies": "5",
      "maintenance_events": "5",
      "dx":1993.544921875,
      "dy":1727.9130859375
		}, 		
		{
      "id": 2,
			"label": "plant_2",
			"anomalies": "12",
      "maintenance_events": "2",
      "dx": 924.6651000976562,
      "dy": 2445.96435546875
		}
	]
	},
	{
    "id": 2,
		"name": "Fleet_2",
		"plants": [
		{
      "id": 1,
			"label": "plant_6",
			"anomalies": "16",
      "maintenance_events": "1",
      "dx": 0,
      "dy": 0
		}, 		
		{
      "id": 2,
			"label": "plant_7",
			"anomalies": "18",
      "maintenance_events": "2",
      "dx": 0,
      "dy": 0
		},
		{
      "id": 3,
			"label": "plant_8",
			"anomalies": "5",
      "maintenance_events": "4",
      "dx": 0,
      "dy": 0
		}, 		
		{
      "id": 4,
			"label": "plant_9",
			"anomalies": "9",
      "maintenance_events": "3",
      "dx": 0,
      "dy": 0
		}
		]
  },
  {
    "id": 3,
		"name": "Fleet_3",
		"plants": [
		{
      "id": 1,
			"label": "plant_10",
			"anomalies": "8",
      "maintenance_events": "11",
      "dx": 0,
      "dy": 0
		}, 		
		{
      "id": 2,
			"label": "plant_11",
			"anomalies": "18",
      "maintenance_events": "12",
      "dx": 0,
      "dy": 0
		},
		{
      "id": 3,
			"label": "plant_12",
			"anomalies": "3",
      "maintenance_events": "14",
      "dx": 0,
      "dy": 0
		}
		]
	}
];

  getGeneratedData() {
    return this.data;
  }
 
}
