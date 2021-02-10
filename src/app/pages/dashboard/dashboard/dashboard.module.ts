import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';


@NgModule({
  imports: [
    RouterModule,
    DashboardRoutingModule,
  ],
  declarations: [DashboardComponent],
  providers: []
})
export class DashboardModule { }
