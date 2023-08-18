import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterModule, Route } from '@angular/router';
import { homeFeatureShellWebRoutes } from './lib.routes';
import { HomeFeatureShellWebComponent } from './home-feature-shell-web.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeFeatureShellWebRoutes),
    RouterModule,
  ],
  declarations: [HomeFeatureShellWebComponent],
})
export class HomeFeatureShellWebModule {}
