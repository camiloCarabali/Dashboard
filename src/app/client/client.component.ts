import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent  implements OnInit {

  constructor(private service: ApiService) { }

  clientList: any[] = [];

  ngOnInit() {
    this.showClients();
  }

  showClients(){
    this.service.getAllClient().subscribe((res: any) => {
      this.clientList = res;
    })
  }

}
