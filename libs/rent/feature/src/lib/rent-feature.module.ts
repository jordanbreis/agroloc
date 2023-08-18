import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterModule, Route } from '@angular/router';
import { rentFeatureRoutes } from './lib.routes';
import { RentFeatureComponent } from './rent-feature.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(rentFeatureRoutes),
    RouterModule,
  ],
  declarations: [RentFeatureComponent],
})
export class RentFeatureModule {}
