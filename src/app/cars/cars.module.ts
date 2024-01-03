import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsComponent } from './cars.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [CarsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CarsComponent }
    ])
  ]
})
export class CarsModule { }
