import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterModule, Route } from '@angular/router';
import { homeFeatureShellMobRoutes } from './lib.routes';
import { HomeFeatureShellMobComponent } from './home-feature-shell-mob.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeFeatureShellMobRoutes),
    RouterModule,
  ],
  declarations: [HomeFeatureShellMobComponent],
})
export class HomeFeatureShellMobModule {}
