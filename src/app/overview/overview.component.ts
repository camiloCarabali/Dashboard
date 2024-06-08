import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent  implements OnInit {

  constructor(private service: ApiService) { }

  nameDriverList: any [] = [];
  travelCountsList: any [] = [];
  driverTravelCounts: { [key: string]: number } = {};

  ngOnInit() {
    this.countTravels();
  }

  countTravels(){
    this.service.getAllTravel().subscribe((res: any) => {
      for(let travel of res) {
        if (travel.driver && travel.driver.name){
          let driverName = travel.driver.name;
          if (driverName in this.driverTravelCounts) {
            this.driverTravelCounts[driverName]++;
          } else {
            this.driverTravelCounts[driverName] = 1;
          }
        }
      }
      this.travelCountsList = Object.values(this.driverTravelCounts);
      this.nameDriverList = Object.keys(this.driverTravelCounts);
      this.graphic(this.travelCountsList, this.nameDriverList)
    })
  }

  graphic(dataY: any[], dataX: any[]){

    var options = {
      chart: {
        type: 'bar'
      },
      series: [{
        name: 'sales',
        data: dataY
      }],
      xaxis: {
        categories: dataX
      }
    }
    
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    
    chart.render();
  }
}