import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss'],
})
export class TravelComponent  implements OnInit {

  constructor(private service: ApiService) { }

  travelList: any[] = [];

  driver: any[] = [];

  ngOnInit() {
    this.showTravels();
  }

  showTravels(){
    this.service.getAllTravel().subscribe((res: any) => {
      this.travelList = res;
    })
  }

}
