import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { GuideComponent } from './guide/guide.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';

@NgModule({
  declarations: [HomeComponent, SpecialOffersComponent, GuideComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent }
    ])
  ]
})
export class HomeModule { }
