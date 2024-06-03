import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Clientes', url: '/folder/inbox', icon: 'car' },
    { title: 'Conductores', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Viajes', url: '/folder/favorites', icon: 'heart' },
  ];
  constructor() {}
}
