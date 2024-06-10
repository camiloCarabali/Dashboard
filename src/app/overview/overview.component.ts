import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import * as ApexCharts from 'apexcharts';
import { compileNgModule } from '@angular/compiler';

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

  nameClientList: any [] = [];
  travelClientCountsList: any [] = [];
  clientTravelCounts: { [key: string]: number } = {};



  ngOnInit() {
    this.countTravelsByDriver();
    this.countTravelsByClient();
  }

  countTravelsByDriver(){
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
      this.graphic_bar(this.travelCountsList, this.nameDriverList)
    })
  }

  countTravelsByClient(){
    this.service.getAllClient().subscribe((res: any) => {
      for(let client of res) {
        if (client.travelsId && client.name){
          let clientName = client.name;
          this.clientTravelCounts[clientName] = client.travelsId.length;
        }
      }
      this.travelClientCountsList = Object.values(this.clientTravelCounts);
      this.nameClientList = Object.keys(this.clientTravelCounts);
      this.graphic_pie(this.travelClientCountsList, this.nameClientList)
    })
  }

  graphic_bar(dataY: any[], dataX: any[]){

    var options = {
      chart: {
        type: 'bar'
      },
      series: [{
        name: 'travels',
        data: dataY
      }],
      xaxis: {
        categories: dataX
      }
    }
    
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    
    chart.render();
  }

  graphic_pie(dataY: any[], dataX: any[]){
    var options = {
      chart: {
        type: 'donut'
      },
      series: dataY,
      labels: dataX,
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
    
    var chart = new ApexCharts(document.querySelector("#chart2"), options);
    
    chart.render();
  
  
  }


}