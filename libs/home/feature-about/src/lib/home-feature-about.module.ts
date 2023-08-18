import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterModule, Route } from '@angular/router';
import { homeFeatureAboutRoutes } from './lib.routes';
import { HomeFeatureAboutComponent } from './home-feature-about.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeFeatureAboutRoutes),
    RouterModule,
  ],
  declarations: [HomeFeatureAboutComponent],
})
export class HomeFeatureAboutModule {}
