import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterModule, Route } from '@angular/router';
import { accountFeatureRoutes } from './lib.routes';
import { AccountFeatureComponent } from './account-feature.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(accountFeatureRoutes),
    RouterModule,
  ],
  declarations: [AccountFeatureComponent],
})
export class AccountFeatureModule {}
