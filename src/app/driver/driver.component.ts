import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss'],
})
export class DriverComponent  implements OnInit {

  constructor(private service: ApiService) { }

  driverList: any[] = [];

  ngOnInit() {
    this.showDrivers();
  }

  showDrivers(){
    this.service.getAllDriver().subscribe((res: any) => {
      this.driverList = res;
    });
  }

}
