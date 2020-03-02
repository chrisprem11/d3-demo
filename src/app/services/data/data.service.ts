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
		"name": "Fleet_1",
		"plants": [
		{
			"label": "plant_1",
			"anomalies": "5",
			"maintenance_events": "5"
		}, 		
		{
			"label": "plant_2",
			"anomalies": "12",
			"maintenance_events": "2"
		}
	]
	},
	{
		"name": "Fleet_2",
		"plants": [
		{
			"label": "plant_6",
			"anomalies": "16",
			"maintenance_events": "1"
		}, 		
		{
			"label": "plant_7",
			"anomalies": "18",
			"maintenance_events": "2"
		},
		{
			"label": "plant_8",
			"anomalies": "5",
			"maintenance_events": "4"
		}, 		
		{
			"label": "plant_9",
			"anomalies": "9",
			"maintenance_events": "3"
		}
		]
  },
  {
		"name": "Fleet_3",
		"plants": [
		{
			"label": "plant_10",
			"anomalies": "8",
			"maintenance_events": "11"
		}, 		
		{
			"label": "plant_11",
			"anomalies": "18",
			"maintenance_events": "12"
		},
		{
			"label": "plant_12",
			"anomalies": "3",
			"maintenance_events": "14"
		}
		]
	}
];

  getGeneratedData() {
    return this.data;
  }
 
}
