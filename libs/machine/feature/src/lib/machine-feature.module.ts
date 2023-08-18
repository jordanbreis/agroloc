import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterModule, Route } from '@angular/router';
import { machineFeatureRoutes } from './lib.routes';
import { MachineFeatureComponent } from './machine-feature.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(machineFeatureRoutes),
    RouterModule,
  ],
  declarations: [MachineFeatureComponent],
})
export class MachineFeatureModule {}
