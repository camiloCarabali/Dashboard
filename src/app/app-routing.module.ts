import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { TravelComponent } from './travel/travel.component';
import { DriverComponent } from './driver/driver.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app-client',
    pathMatch: 'full',
  },
  {
    path: 'app-client',
    component: ClientComponent,
  },
  {
    path: 'app-driver',
    component: DriverComponent,
  },
  {
    path: 'app-travel',
    component: TravelComponent,
  },
  {
    path: 'app-overview',
    component: OverviewComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
