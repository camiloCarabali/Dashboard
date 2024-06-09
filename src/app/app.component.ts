import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit {

  public appPages = [
    { title: 'Overview', url: '/app-overview', icon: 'bar-chart' },
    { title: 'Client', url: '/app-client', icon: 'person' },
    { title: 'Driver', url: '/app-driver', icon: 'car' },
    { title: 'Travel', url: '/app-travel', icon: 'navigate' },
  ];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.token().subscribe(
      () => {
        console.log('Token obtenido con éxito');
      },
      (err) => {
        console.error('Error obteniendo el token', err);
      }
    );
  }

}
